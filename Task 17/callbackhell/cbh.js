let words = document.querySelectorAll(".word");

const animateAll = (animate) => {
  setTimeout(() => {
    animate(words[0]);
    setTimeout(() => {
      animate(words[1]);
      setTimeout(() => {
        animate(words[2]);
        setTimeout(() => {
          animate(words[3]);
          setTimeout(() => {
            animate(words[4]);
            setTimeout(() => {
              animate(words[5]);
              setTimeout(() => {
                animate(words[6]);
                setTimeout(() => {
                  animate(words[7]);
                  setTimeout(() => {
                    animate(words[8]);
                    setTimeout(() => {
                      animate(words[9]);
                      setTimeout(() => {
                        animate(words[10]);
                      }, 10000);
                    }, 9000);
                  }, 8000);
                }, 7000);
              }, 6000);
            }, 5000);
          }, 4000);
        }, 3000);
      }, 2000);
    }, 1000);
  }, 1000);
};

const animate = (word) => {
  word.classList.add("animate");
};

animateAll(animate);
