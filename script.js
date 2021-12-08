
tsParticles.load("tsparticlesPC", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0
    },
    color: {
      value: ["#00FFFC", "#FC00FF", "#fffc00"]
    },
    shape: {
      type: "confetti",
      options: {
        confetti: {
          type: ["circle", "square"]
        }
      }
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        minimumValue: 0,
        speed: 2,
        startValue: "max",
        destroy: "min"
      }
    },
    size: {
      value: 7,
      random: {
        enable: true,
        minimumValue: 3
      }
    },
    links: {
      enable: false
    },
    life: {
      duration: {
        sync: true,
        value: 5
      },
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 20
      },
      speed: 30,
      decay: 0.1,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "destroy",
        top: "none"
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      resize: true
    }
  },
  detectRetina: true,
  emitters: {
    direction: "none",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.4
    },
    rate: {
      delay: 0.1,
      quantity: 100
    },
    size: {
      width: 0,
      height: 0
    }
  }
});

tsParticles.load("tsparticlesPhone", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0
    },
    color: {
      value: ["#00FFFC", "#FC00FF", "#fffc00"]
    },
    shape: {
      type: "confetti",
      options: {
        confetti: {
          type: ["circle", "square"]
        }
      }
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        minimumValue: 0,
        speed: 2,
        startValue: "max",
        destroy: "min"
      }
    },
    size: {
      value: 15,
      random: {
        enable: true,
        minimumValue: 3
      }
    },
    links: {
      enable: false
    },
    life: {
      duration: {
        sync: true,
        value: 5
      },
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 20
      },
      speed: 30,
      decay: 0.1,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "destroy",
        top: "none"
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      resize: true
    }
  },
  detectRetina: true,
  emitters: {
    direction: "none",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.4
    },
    rate: {
      delay: 0.1,
      quantity: 100
    },
    size: {
      width: 0,
      height: 0
    }
  }
});

function startElonMuskForPhone() {
  var times = 1;
  function go() {
    if (times % 2) {
      ElonMusk.classList.remove('back');
      ElonMusk.style.marginLeft =  70 + '%'; 
    } else {
      ElonMusk.classList.add('back');
      ElonMusk.style.marginLeft =  0 + '%';
    }
  }
  go();
  ElonMusk.addEventListener('transitionend', function startElonMuskForPhone() {
    times++;
    go();
  });
}

function startLeftAndRight() {
  var times = 1;
  right.classList.add('back');
  function goFace() {
    if (times % 2) {
      left.classList.add('back');
      right.classList.remove('back');
    } else {
      left.classList.remove('back');
      right.classList.add('back');
    }
    times++;
  }
  setInterval(() => goFace(), 500)
}

startLeftAndRight();

btnParty.addEventListener("click", () => {
  confetti("root", {
    angle: 90,
    count: 50,
    position: { x: 50, y: 50 },
    spread: 60,
    startVelocity: 200,
    decay: 0.9,
    gravity: 1,
    drift: 3,
    ticks: 200,
    colors: ["#fff", "#f00"],
    shapes: ["square", "circle"],
    scalar: 2,
    zIndex: 2000,
    disableForReducedMotion: true
  });
});


