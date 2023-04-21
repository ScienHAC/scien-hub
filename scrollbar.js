/*document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", () => {
        const func_hor = () => {
            let isDragging = false;
            let startY = 0;
            let scrollTop = 0;
            var a = document.querySelectorAll('code');

            a.forEach((a) => {
                let Cst = document.createElement('div');
                Cst.setAttribute('class', 'custom-scrollbar-track-div-v');
                a.parentNode.appendChild(Cst);
                let Csb = document.createElement('div');
                Csb.setAttribute('class', 'custom-scrollbar-div-v');
                Cst.appendChild(Csb);
                var scrollbar = a.parentNode.querySelector('.custom-scrollbar-track-div-v');
                var scrollThumb = scrollbar.querySelector('.custom-scrollbar-div-v');

                scrollbar.style.height = `${a.offsetHeight-5}px`;
                function setScrollThumbHeight() {
                    const a = document.querySelector('code');
                    const contentHeight = a.scrollHeight;
                    const viewportHeight = a.offsetHeight;
                    const scrollbarHeight = scrollbar.offsetHeight;
                    const scrollThumbHeight = Math.max((viewportHeight / contentHeight) * scrollbarHeight, 30);
                    scrollThumb.style.height = `${scrollThumbHeight}px`;
                }



                scrollbar.addEventListener('mousedown', function (event) {
                    document.body.style.cursor = 'grab';
                    const clickPosition = event.clientY - scrollbar.getBoundingClientRect().top;
                    const thumbHeight = scrollThumb.getBoundingClientRect().height;
                    const trackHeight = scrollbar.getBoundingClientRect().height;
                    const thumbPosition = clickPosition - (thumbHeight / 2);
                    const maxThumbTop = trackHeight - thumbHeight;
                    const newThumbTop = Math.min(Math.max(thumbPosition, 0), maxThumbTop);
                    scrollThumb.style.top = `${newThumbTop}px`;

                    const scrollPercent = newThumbTop / maxThumbTop;
                    const contentHeight = a.scrollHeight;
                    const totalScrollHeight = contentHeight - window.innerHeight;
                    const scrollPosition = totalScrollHeight * scrollPercent;

                    a.scrollTo({
                        top: scrollPosition,
                        //left: 0,
                    });
                });

                scrollThumb.addEventListener('mousedown', function (e) {
                    document.body.style.cursor = 'grab';
                    isDragging = true;
                    startY = e.clientY - scrollThumb.offsetTop;
                    scrollTop = scrollbar.scrollTop;
                    e.preventDefault();
                });
                function onMouseMove(e) {
                    if (isDragging) {
                        let newTop = e.clientY - startY;
                        newTop = Math.max(newTop, 0);
                        newTop = Math.min(newTop, scrollbar.offsetHeight - scrollThumb.offsetHeight);
                        scrollThumb.style.top = `${newTop}px`;
                        const scrollPercent = newTop / (scrollbar.offsetHeight - scrollThumb.offsetHeight);
                        const contentHeight = a.scrollHeight;
                        const totalScrollHeight = contentHeight - a.offsetHeight;
                        const ScrollPosition = totalScrollHeight * scrollPercent;
                        a.scrollTo({
                            top: ScrollPosition,
                            //left: 0,
                        });
                        e.preventDefault();
                    }
                }
                scrollThumb.addEventListener('mousedown', function (e) {
                    document.addEventListener('mousemove', onMouseMove);
                });

                a.addEventListener('scroll', (e) => {
                    const pxToVh = (scrollThumb.offsetHeight / a.offsetHeight) * 100;//can be edit a.scrollheight
                    const totalHeight = a.scrollHeight - a.clientHeight;
                    const initialThumbTop = (parseInt(scrollThumb.style.top) + scrollThumb.offsetHeight) / a.offsetHeight * 100 - pxToVh;
                    scrollThumb.style.top = `${initialThumbTop}vh`;
                    const hgA = (scrollbar.offsetHeight / a.offsetHeight) * 100 - pxToVh;
                    let total_allow_height = scrollbar.offsetHeight - scrollThumb.offsetHeight
                    scrollThumb.style.top = `${(a.scrollTop / totalHeight) * total_allow_height}px`;
                    e.preventDefault();
                    //console.log(a.scrollHeight)
                });




                if (a.scrollHeight > a.offsetHeight) {
                    document.querySelector('.custom-scrollbar-track-div-v,.custom-scrollbar-track-div-v').style.display = 'block';
                } else {
                    document.querySelector('.custom-scrollbar-track-div-v,.custom-scrollbar-track-div-v').style.display = 'none';
                }
                function checkScrollbarVisibility() {
                    const contentHeight = a.scrollHeight;
                    const windowHeight = a.offsetHeight;
                    const isScrollable = contentHeight > windowHeight;
                    if (isScrollable) {
                        scrollThumb.style.display = 'block';
                        scrollbar.style.display = 'block';
                    } else {
                        scrollThumb.style.display = 'none';
                        scrollbar.style.display = 'none';
                    }
                }





                checkScrollbarVisibility();

                window.addEventListener('resize', checkScrollbarVisibility);

                setScrollThumbHeight();


                window.addEventListener('resize', function (e) {
                    setScrollThumbHeight();
                    e.preventDefault();
                });

                document.addEventListener('mouseup', function (e) {
                    document.body.style.cursor = 'auto';
                    isDragging = false;
                    e.preventDefault();
                    document.removeEventListener('mousemove', onMouseMove);
                });
            });
        }
        func_hor();
    });
});




document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", () => {
        const func_hor = () => {
            let isDragging = false;
            let startX = 0;
            let scrollLeft = 0;
            let scrollRight = 0;

            var a = document.querySelectorAll('code');
            a.forEach((a) => {
                let Cst = document.createElement('div');
                Cst.setAttribute('class', 'custom-scrollbar-track-div');
                a.appendChild(Cst);

                let Csb = document.createElement('div');
                Csb.setAttribute('class', 'custom-scrollbar-div');
                Cst.appendChild(Csb);

                var scrollbar = a.parentNode.querySelector('.custom-scrollbar-track-div');
                var scrollThumb = scrollbar.querySelector('.custom-scrollbar-div');
                scrollbar.style.width = `${a.offsetWidth}px`;

                function setScrollThumbWidth() {
                    const a = document.querySelector('code');
                    const contentWidth = a.scrollWidth;
                    const viewportWidth = a.offsetWidth;
                    const scrollbarWidth = scrollbar.offsetWidth;
                    const scrollThumbWidth = Math.max((viewportWidth / contentWidth) * scrollbarWidth, 30);
                    scrollThumb.style.width = `${scrollThumbWidth}px`;
                }

                scrollbar.addEventListener('mousedown', function (event) {
                    document.body.style.cursor = 'grab';
                    const clickPosition = event.clientX - scrollbar.getBoundingClientRect().left;
                    const thumbWidth = scrollThumb.getBoundingClientRect().width;
                    const trackWidth = scrollbar.getBoundingClientRect().width;
                    const thumbPosition = clickPosition - (thumbWidth / 2);
                    const maxThumbLeft = trackWidth - thumbWidth;
                    const newThumbLeft = Math.min(Math.max(thumbPosition, 0), maxThumbLeft);
                    scrollThumb.style.left = `${newThumbLeft}px`;

                    const scrollPercent = newThumbLeft / maxThumbLeft;
                    const contentWidth = a.scrollWidth;
                    const totalScrollWidth = contentWidth - window.innerWidth;
                    const scrollPosition = totalScrollWidth * scrollPercent;

                    a.scrollTo({
                        //top: 0,
                        left: scrollPosition,
                    });
                });

                scrollThumb.addEventListener('mousedown', function (e) {
                    document.body.style.cursor = 'grab';
                    isDragging = true;
                    startX = e.clientX - scrollThumb.offsetLeft;
                    scrollLeft = scrollbar.scrollLeft;
                    e.preventDefault();
                });
                function onMouseMove(e) {
                    if (isDragging) {
                        let newLeft = e.clientX - startX;
                        newLeft = Math.max(newLeft, 0);
                        newLeft = Math.min(newLeft, scrollbar.offsetWidth - scrollThumb.offsetWidth);
                        scrollThumb.style.left = `${newLeft}px`;
                        const scrollPercent = newLeft / (scrollbar.offsetWidth - scrollThumb.offsetWidth);
                        const contentWidth = a.scrollWidth;
                        const totalScrollWidth = contentWidth - a.offsetWidth;
                        const ScrollPosition = totalScrollWidth * scrollPercent;
                        a.scrollTo({
                            //top: 0,
                            left: ScrollPosition,
                        });
                        e.preventDefault();
                    }
                }

                scrollThumb.addEventListener('mousedown', function () {
                    isDragging = true;
                    startX = event.clientX - scrollThumb.offsetLeft;
                    document.addEventListener('mousemove', onMouseMove);
                });


                a.addEventListener('scroll', (e) => {
                    const pxToVw = (scrollThumb.offsetWidth / a.offsetWidth) * 100;
                    const totalWidth = a.scrollWidth - a.clientWidth;
                    const initialThumbLeft = (parseInt(scrollThumb.style.left) + scrollThumb.offsetWidth) / a.offsetWidth * 100 - pxToVw;
                    scrollThumb.style.left = `${initialThumbLeft}vw`;
                    const wdA = (scrollbar.offsetWidth / a.offsetWidth) * 100 - pxToVw;
                    let total_allow_width = scrollbar.offsetWidth - scrollThumb.offsetWidth;
                    scrollThumb.style.left = `${(a.scrollLeft / totalWidth) * total_allow_width}px`;
                    e.preventDefault();
                });

                if (a.scrollWidth > a.offsetWidth) {
                    document.querySelector('.custom-scrollbar-track-div,.custom-scrollbar-track-div').style.display = 'block';
                } else {
                    document.querySelector('.custom-scrollbar-track-div,.custom-scrollbar-track-div').style.display = 'none';
                }

                function checkScrollbarVisibility() {
                    const contentWidth = a.scrollWidth;
                    const windowWidth = a.offsetWidth;
                    const isScrollable = contentWidth > windowWidth;
                    if (isScrollable) {
                        scrollThumb.style.display = 'block';
                        scrollbar.style.display = 'block';
                    } else {
                        scrollThumb.style.display = 'none';
                        scrollbar.style.display = 'none';
                    }
                }

                checkScrollbarVisibility();

                window.addEventListener('resize', checkScrollbarVisibility);

                setScrollThumbWidth();


                window.addEventListener('resize', function (e) {
                    setScrollThumbWidth();
                    e.preventDefault();
                });

                document.addEventListener('mouseup', function (e) {
                    document.body.style.cursor = 'auto';
                    isDragging = false;
                    e.preventDefault();
                    document.removeEventListener('mousemove', onMouseMove);
                });
            });
        };
        func_hor();
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", () => {
        const func_ver_m = () => {
            let isDragging = false;
            let startY = 0;
            let scrollTop = 0;
            let startX = 0;
            let scrollLeft = 0;
            let scrollRight = 0;
            const isTouchDevice = 'ontouchstart' in document.documentElement;
            const scrollEvent = isTouchDevice ? 'touchmove' : 'scroll';
            const startEvent = isTouchDevice ? 'touchstart' : 'mousedown';
            const endEvent = isTouchDevice ? 'touchend' : 'mouseup';
            const moveEvent = isTouchDevice ? 'touchmove' : 'mousemove';
            var a = document.querySelectorAll('code');
            a.forEach((a) => {
                let Cst = document.createElement('div');
                Cst.setAttribute('class', 'custom-scrollbar-track-div-v');
                a.appendChild(Cst);
                let Csb = document.createElement('div');
                Csb.setAttribute('class', 'custom-scrollbar-div-v');
                Cst.appendChild(Csb);
                var scrollbar = a.parentNode.querySelector('.custom-scrollbar-track-div-v');
                var scrollThumb = scrollbar.querySelector('.custom-scrollbar-div-v');
                scrollbar.style.height = `${a.offsetHeight-5}px`;
                function setScrollThumbHeight() {
                    const contentHeight = a.scrollHeight;
                    const viewportHeight = a.offsetHeight;
                    const scrollbarHeight = scrollbar.offsetHeight;
                    const scrollThumbHeight = Math.max((viewportHeight / contentHeight) * scrollbarHeight, 30);
                    scrollThumb.style.height = `${scrollThumbHeight}px`;
                }
                scrollbar.addEventListener(startEvent, function (event) {
                    scrollbar.style.visibility = 'visible';
                    document.body.style.cursor = 'grab';
                    const clickPosition = isTouchDevice ? event.touches[0].clientY - scrollbar.getBoundingClientRect().top : event.clientY - scrollbar.getBoundingClientRect().top;
                    const thumbHeight = scrollThumb.getBoundingClientRect().height;
                    const trackHeight = scrollbar.getBoundingClientRect().height;
                    const thumbPosition = clickPosition - (thumbHeight / 2);
                    const maxThumbTop = trackHeight - thumbHeight;
                    const newThumbTop = Math.min(Math.max(thumbPosition, 0), maxThumbTop);
                    scrollThumb.style.top = `${newThumbTop}px`;
                    const scrollPercent = newThumbTop / maxThumbTop;
                    const contentHeight = a.scrollHeight;
                    const totalScrollHeight = contentHeight - window.innerHeight;
                    const scrollPosition = totalScrollHeight * scrollPercent;
                    a.scrollTo({
                        top: scrollPosition,
                        left: a.scrollLeft,
                    });
                });
                scrollThumb.addEventListener(startEvent, function (e) {
                    scrollbar.style.visibility = 'visible';
                    document.body.style.cursor = 'grab';
                    isDragging = true;
                    startY = isTouchDevice ? e.touches[0].clientY - scrollThumb.offsetTop : e.clientY - scrollThumb.offsetTop;
                    scrollTop = a.scrollTop;
                    e.preventDefault();
                });
                function onTouchMove(e) {
                    scrollbar.style.visibility = 'visible';
                    if (isDragging) {
                        let newTop = isTouchDevice ? e.touches[0].clientY - startY : e.clientY - startY;
                        newTop = Math.max(newTop, 0);
                        newTop = Math.min(newTop, scrollbar.offsetHeight - scrollThumb.offsetHeight);
                        scrollThumb.style.top = `${newTop}px`;
                        const scrollPercent = newTop / (scrollbar.offsetHeight - scrollThumb.offsetHeight);
                        const contentHeight = a.scrollHeight;
                        const totalScrollHeight = contentHeight - a.offsetHeight;
                        const scrollPosition = totalScrollHeight * scrollPercent;
                        a.scrollTo({
                            top: scrollPosition,
                            left: a.scrollLeft,
                        });
                    }
                }
                scrollThumb.addEventListener(startEvent, () => {
                    document.addEventListener(moveEvent, onTouchMove);
                });
                document.addEventListener(endEvent, function () {
                    isDragging = false;
                    document.body.style.cursor = 'auto';
                    document.removeEventListener(moveEvent, onTouchMove);
                });
                a.addEventListener('scroll', function () {
                    const contentHeight = a.scrollHeight;
                    const viewportHeight = a.offsetHeight;
                    const scrollTop = a.scrollTop;
                    const scrollbarHeight = scrollbar.offsetHeight;
                    const scrollThumbHeight = scrollThumb.offsetHeight;
                    const maxThumbTop = scrollbarHeight - scrollThumbHeight;
                    const scrollPercent = scrollTop / (contentHeight - viewportHeight);
                    const thumbTop = maxThumbTop * scrollPercent;
                    scrollThumb.style.top = `${thumbTop}px`;
                });
                function checkScrollbarVisibility() {
                    const contentHeight = a.scrollHeight;
                    const windowHeight = a.offsetHeight;
                    const isScrollable = contentHeight > windowHeight;
                    if (isScrollable) {
                        scrollThumb.style.display = 'block';
                        scrollbar.style.display = 'block';
                    } else {
                        scrollThumb.style.display = 'none';
                        scrollbar.style.display = 'none';
                    }
                }
                checkScrollbarVisibility();
                setScrollThumbHeight();
                window.addEventListener('resize', setScrollThumbHeight);
            });
        }
        func_ver_m();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", () => {
        const func_hor_m = () => {
            let isDragging = false;
            let startY = 0;
            let scrollTop = 0;
            let startX = 0;
            let scrollLeft = 0;
            let scrollRight = 0;
            const isTouchDevice = 'ontouchstart' in document.documentElement;
            const scrollEvent = isTouchDevice ? 'touchmove' : 'scroll';
            const startEvent = isTouchDevice ? 'touchstart' : 'mousedown';
            const endEvent = isTouchDevice ? 'touchend' : 'mouseup';
            const moveEvent = isTouchDevice ? 'touchmove' : 'mousemove';
            var a = document.querySelectorAll('code');
            a.forEach((a) => {
                let Cst = document.createElement('div');
                Cst.setAttribute('class', 'custom-scrollbar-track-div');
                a.appendChild(Cst);
                let Csb = document.createElement('div');
                Csb.setAttribute('class', 'custom-scrollbar-div');
                Cst.appendChild(Csb);
                var scrollbar = a.parentNode.querySelector('.custom-scrollbar-track-div');
                var scrollThumb = scrollbar.querySelector('.custom-scrollbar-div');
                scrollbar.style.width = `${a.offsetWidth}px`;
                function setScrollThumbWidth() {
                    const contentWidth = a.scrollWidth;
                    const viewportWidth = a.offsetWidth;
                    const scrollbarWidth = scrollbar.offsetWidth;
                    const scrollThumbWidth = Math.max((viewportWidth / contentWidth) * scrollbarWidth, 30);
                    scrollThumb.style.width = `${scrollThumbWidth}px`;
                }
                scrollbar.addEventListener(startEvent, function (event) {
                    scrollbar.style.visibility = 'visible';
                    document.body.style.cursor = 'grab';
                    const clickPosition = isTouchDevice ? event.touches[0].clientX - scrollbar.getBoundingClientRect().left : event.clientX - scrollbar.getBoundingClientRect().left;
                    const thumbWidth = scrollThumb.getBoundingClientRect().width;
                    const trackWidth = scrollbar.getBoundingClientRect().width;
                    const thumbPosition = clickPosition - (thumbWidth / 2);
                    const maxThumbLeft = trackWidth - thumbWidth;
                    const newThumbLeft = Math.min(Math.max(thumbPosition, 0), maxThumbLeft);
                    scrollThumb.style.left = `${newThumbLeft}px`;
                    const scrollPercent = newThumbLeft / maxThumbLeft;
                    const contentWidth = a.scrollWidth;
                    const totalScrollWidth = contentWidth - window.innerWidth;
                    const scrollPosition = totalScrollWidth * scrollPercent;
                    a.scrollTo({
                        top: a.scrollTop,
                        left: scrollPosition,
                    });
                });
                scrollThumb.addEventListener(startEvent, function (e) {
                    scrollbar.style.visibility = 'visible';
                    document.body.style.cursor = 'grab';
                    isDragging = true;
                    startX = isTouchDevice ? e.touches[0].clientX - scrollThumb.offsetLeft : e.clientX - scrollThumb.offsetLeft;
                    scrollLeft = a.scrollLeft;
                    e.preventDefault();
                });
                function onMouseMove(e) {
                    scrollbar.style.visibility = 'visible';
                    if (isDragging) {
                        let newLeft = isTouchDevice ? e.touches[0].clientX - startX : e.clientX - startX;
                        newLeft = Math.max(newLeft, 0);
                        newLeft = Math.min(newLeft, scrollbar.offsetWidth - scrollThumb.offsetWidth);
                        scrollThumb.style.left = `${newLeft}px`;
                        const scrollPercent = newLeft / (scrollbar.offsetWidth - scrollThumb.offsetWidth);
                        const contentWidth = a.scrollWidth;
                        const totalScrollWidth = contentWidth - a.offsetWidth;
                        const ScrollPosition = totalScrollWidth * scrollPercent;
                        a.scrollTo({
                            top: a.scrollTop,
                            left: ScrollPosition,
                        });
                    }
                }
                function onMouseUp() {
                    isDragging = false;
                    document.body.style.cursor = 'auto';
                    document.removeEventListener(moveEvent, onMouseMove);
                }
                scrollThumb.addEventListener(startEvent, () => {
                    document.addEventListener(moveEvent, onMouseMove);
                });
                document.addEventListener(endEvent, onMouseUp);
                document.addEventListener(scrollEvent, function () {
                    const contentWidth = a.scrollWidth;
                    const viewportWidth = a.offsetWidth;
                    const scrollbarWidth = scrollbar.offsetWidth;
                    const isScrolled = contentWidth > viewportWidth;
                    scrollbar.style.display = isScrolled ? 'block' : 'none';
                    setScrollThumbWidth();
                    const scrollPercent = a.scrollLeft / (contentWidth - viewportWidth);
                    const maxThumbLeft = scrollbarWidth - scrollThumb.offsetWidth;
                    const thumbLeft = scrollPercent * maxThumbLeft;
                    scrollThumb.style.left = `${thumbLeft}px`;
                });
                a.addEventListener('scroll', (e) => {
                    const pxToVw = (scrollThumb.offsetWidth / a.offsetWidth) * 100;
                    const totalWidth = a.scrollWidth - a.clientWidth;
                    const initialThumbLeft = (parseInt(scrollThumb.style.left) + scrollThumb.offsetWidth) / a.offsetWidth * 100 - pxToVw;
                    scrollThumb.style.left = `${initialThumbLeft}vw`;
                    const wdA = (scrollbar.offsetWidth / a.offsetWidth) * 100 - pxToVw;
                    let total_allow_width = scrollbar.offsetWidth - scrollThumb.offsetWidth;
                    scrollThumb.style.left = `${(a.scrollLeft / totalWidth) * total_allow_width}px`;
                    e.preventDefault();
                });
                function checkScrollbarVisibility() {
                    const contentWidth = a.scrollWidth;
                    const windowWidth = a.offsetWidth;
                    const isScrollable = contentWidth > windowWidth;
                    if (isScrollable) {
                        scrollThumb.style.display = 'block';
                        scrollbar.style.display = 'block';
                    } else {
                        scrollThumb.style.display = 'none';
                        scrollbar.style.display = 'none';
                    }
                }
                checkScrollbarVisibility();
                setScrollThumbWidth();
            });
        };
        func_hor_m();
    });
});
