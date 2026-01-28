const dataSkill = {
    q: {
      skill: "BLINDSIDE [Q]",
      deskripsi:
        "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.",
      video: "/assets/yoru_q_compressed.mp4",
    },
    e: {
      skill: "GATECRASH [E]",
      deskripsi:
        "EQUIP a rift tether FIRE to send the tether forward. ALT FIRE to place a stationary tether. ACTIVATE to teleport to the tether's location. USE to trigger a fake teleport.",
      video: "/assets/yoru_e_compressed.mp4",
    },
    c: {
      skill: "FAKEOUT [C]",
      deskripsi:
        "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.",
      video: "/assets/yoru_c_compressed.mp4",
    },
    x: {
      skill: "DIMENSIONAL DRIFT [X]",
      deskripsi:
        "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside. REACTIVATE to exit Yoru's dimension early.",
      video: "/assets/yoru_x_compressed.mp4",
    },
  };
  
  function switchSkill(skillKey) {
    const skill = document.getElementById("skill-name");
    const deskripsi = document.getElementById("skill-desc");
    const video = document.getElementById("skill-vid");
  
    skill.innerText = dataSkill[skillKey].skill;
    deskripsi.innerText = dataSkill[skillKey].deskripsi;
    video.querySelector("source").src = dataSkill[skillKey].video;
    video.load();
    video.play();
  } 

  window.onload = function () {
    switchSkill("c");
  }