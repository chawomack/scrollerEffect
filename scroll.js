
(function(window){
    var sections = document.querySelectorAll('section');
    var offsets = [];
    var divMidPoint = 0;
    
    function getSectionOffsets() {
        sections.forEach((section)=>{
            offsets.push(section.offsetTop);
        });
    }
    
    function showSectionContent(index) {
        sections[index].children[0].classList.add('left-move-center');
        sections[index].children[1].classList.add('right-move-center');
    }
    
    function myScroller(){
        for(var i = 0; i < sections.length; i++) {
            if (offsets[i] + divMidPoint <= window.pageYOffset + window.innerHeight &&
               offsets[i] + divMidPoint >= window.pageYOffset){
                 showSectionContent(i)
            }
            else {
                sections[i].children[0].classList.remove('left-move-center');
                sections[i].children[1].classList.remove('right-move-center');

            }
        }
    }
    
    function init(){
        getSectionOffsets();
        
        window.addEventListener('scroll', myScroller);
        
        divMidPoint = sections[0].scrollHeight / 2;
        
        for(var i = 0; i < sections.length; i++) {
            if (offsets[i] + divMidPoint <= window.pageYOffset + window.innerHeight){
                 showSectionContent(i)
            }
            else
                break;
        }
    }
    init();
})(window);

