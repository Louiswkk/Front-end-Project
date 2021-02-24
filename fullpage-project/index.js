var myFullpage = new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  onLeave: function (origin, destination, direction) {
    const section = destination.item;
    const title = section.querySelector('h1');
    const t1 = new TimelineMax({ delay: 0.5 });
    t1.fromTo(title, 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

    if (destination.index === 1) {
      const description = document.querySelectorAll('.description');
      t1.fromTo(description, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
    }
  }
});