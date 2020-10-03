(function(){ 
  const $container = $('.section-roadmap');
  const $roadmap = $('.roadmap');
  const $left = $container.find('li').eq(0);
  const $right = $container.find('li').eq(1);
  const $content = $container.find('.road-item');
  const size = 240;
  const totalItem = $content.find('dl').length;
  let left;
  $right.attr('class', 'right-control enable');

  $left.click(() => {
    left = parseInt($content.css('margin-left'));
    if (left < 0) {
      left += size;
      $content.animate({marginLeft: left}, 'normal')
    }
    if (left < 0) {
      $left.attr('class', 'left-control enable')
    } else {
      $left.attr('class', 'left-control');
    }
    const width = $roadmap.width();
    const showItem = Math.floor(width/size);
    let hideItem = Math.ceil(-left/size);
    if (showItem + hideItem <= totalItem) {
      $right.attr('class', 'right-control enable')
    } else {
      $right.attr('class', 'right-control');
    }
  })
  $right.click(() => {
    left = parseInt($content.css('margin-left'));
    const width = $roadmap.width();
    const showItem = Math.floor(width/size);
    let hideItem = Math.ceil(-left/size);
    if (showItem + hideItem <= totalItem){
      left -= size
      $content.animate({marginLeft: left}, 'normal');
    }
    hideItem = Math.ceil(-left/size);
    if (showItem + hideItem <= totalItem) {
      $right.attr('class', 'right-control enable')
    } else {
      $right.attr('class', 'right-control');
    }
    if (left < 0) {
      $left.attr('class', 'left-control enable');
    } else {
      $left.attr('class', 'left-control');
    }
  })
}());