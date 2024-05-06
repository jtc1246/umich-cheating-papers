document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img"); // 获取所有img元素

    // 定义一个函数来设置图片高度
    function setHeight(img) {
        const originalWidth = img.naturalWidth;   // 原始宽度
        const originalHeight = img.naturalHeight; // 原始高度
        const aspectRatio = originalWidth / originalHeight; // 宽高比

        // 设置height基于当前的width和原始宽高比
        img.style.height = `${img.clientWidth / aspectRatio}px`;

        // 如果需要，可以在此输出宽度和高度进行检查
        console.log(`Image ${img.src} height set to ${img.clientWidth / aspectRatio}px based on its current width.`);
    }

    images.forEach(img => {
        // 当图片加载完成后执行
        img.onload = function() {
            setHeight(img);
        };

        // 如果图片已经被加载（例如缓存），则手动触发onload
        if (img.complete && img.naturalWidth && img.naturalHeight) {
            setHeight(img);
        }
    });

    // 添加窗口resize事件监听器
    window.addEventListener('resize', function() {
        images.forEach(img => {
            if (img.complete) {
                setHeight(img);
            }
        });
    });
});
