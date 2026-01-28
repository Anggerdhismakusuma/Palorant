const dataSkill = {
    q: {
      skill: "ALARM BOT [Q]",
      deskripsi: "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.",
      video: "/assets/killjoy_q_compressed.mp4",
    },
    e: {
      skill: "TURRET [E]",
      deskripsi:
        "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.",
      video: "/assets/killjoy_e_compressed.mp4",
    },
    c: {
      skill: "NANOSWARM [C]",
      deskripsi:
        "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
      video: "/assets/killjoy_c_compressed.mp4",
    },
    x: {
      skill: "LOCKDOWN [X]",
      deskripsi:
        "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
      video: "/assets/killjoy_x_compressed (1).mp4",
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
  