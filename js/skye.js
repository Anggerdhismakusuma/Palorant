const dataSkill = {
  q: {
    skill: "TRAILBLAZER [Q]",
    deskripsi:
      "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.",
    video: "/assets/skye_q_compressed.mp4",
  },
  e: {
    skill: "GUIDING LIGHT [E]",
    deskripsi:
      "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.",
    video: "/assets/skye_e_compressed.mp4",
  },
  c: {
    skill: "REGROWTH [C]",
    deskripsi:
      "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.",
    video: "/assets/skye_c_compressed(1).mp4",
  },
  x: {
    skill: "SEEKERS [X]",
    deskripsi:
      "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it Nearsights them. Enemies can destroy the Seekers.",
    video: "/assets/skye_x_compressed.mp4",
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
