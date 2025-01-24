function downloadFile(url, filename) {
    fetch(url)
        .then(response => {
            const contentLength = response.headers.get('content-length');
            const total = parseInt(contentLength, 10);
            let loaded = 0;

            const reader = response.body.getReader();
            const stream = new ReadableStream({
                start(controller) {
                    function push() {
                        reader.read().then(({done, value}) => {
                            if (done) {
                                controller.close();
                                return;
                            }
                            loaded += value.length;
                            const progress = (loaded / total) * 100;
                            updateProgress(progress);
                            controller.enqueue(value);
                            push();
                        });
                    }
                    push();
                }
            });
            return new Response(stream);
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            a.remove();
        });
}

function updateProgress(progress) {
    // 更新下载进度显示
    const progressElement = document.getElementById('download-progress');
    if (progressElement) {
        progressElement.style.width = `${progress}%`;
    }
}

function checkBeforeDownload(platform) {
    const userAgent = navigator.userAgent.toLowerCase();
    const wrongPlatform = (
        (platform === 'windows' && !userAgent.includes('windows')) ||
        (platform === 'mac' && !userAgent.includes('mac')) ||
        (platform === 'linux' && !userAgent.includes('linux'))
    );

    if (wrongPlatform) {
        return confirm('检测到您当前的操作系统可能与下载版本不符，是否继续下载？');
    }
    return true;
} 