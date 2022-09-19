<script type="text/javascript">
document.addEventListener("mousemove", function(e){
  const bg = document.querySelector('.bg');
  const bird = document.querySelector('.bird');
  const content = document.querySelector('.content'); 
  
  bg.style.width = 100 + e.pageX/100 + '%';
  bg.style.height = 100 + e.pageX/100 + '%';

  bird.style.right = 100 + e.pageX/2 + 'px';
  content.style.left = 100 + e.pageX/2.5 + 'px';
})
</script>

<script >
window.addEventListener('scroll', function(){
    const bird = document.querySelector('.bird');
    let scrollPosition = window.pageYOffset;

    bird.style.transform = 'translateY(' + scrollPosition *.5 +'px';
} );
</script>