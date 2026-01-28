const dataSkill = {
    q: {
      skill: "SLOW ORB [Q]",
      deskripsi: "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
      video: "/assets/sage_q_compressed.mp4",
    },
    e: {
      skill: "HEALING ORB [E]",
      deskripsi:
        "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
      video: "/assets/sage_e_compressed.mp4",
    },
    c: {
      skill: "BARRIER ORB [C]",
      deskripsi:
        "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
      video: "/assets/sage_c_compressed.mp4",
    },
    x: {
      skill: "RESURRECTION [X]",
      deskripsi:
        "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
      video: "/assets/sage_x_compressed.mp4",
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
  };
  