const dataSkill = {
    q: {
      skill: "BLAST PACK [Q]",
      deskripsi:
        "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.",
      video: "/assets/raze_q_compressed.mp4",
    },
    e: {
      skill: "PAINT SHELLS [E]",
      deskripsi:
        "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills.",
      video: "/assets/raze_e_compressed.mp4",
    },
    c: {
      skill: "BOOM BOT [C]",
      deskripsi:
        "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
      video: "/assets/raze_c _compressed.mp4",
    },
    x: {
      skill: "SHOWSTOPPER [X]",
      deskripsi:
        "EQUIP a rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything.",
      video: "/assets/raze_x_compressed.mp4",
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