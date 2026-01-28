const dataSkill = {
  q: {
    skill: "UPDRAFT [Q]",
    deskripsi: "INSTANTLY propel Jett high into the air.",
    video: "/assets/jett_q_compressed.mp4",
  },
  e: {
    skill: "TAILWIND [E]",
    deskripsi:
      "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
    video: "/assets/jett_e_compressed.mp4",
  },
  c: {
    skill: "CLOUDBURST [C]",
    deskripsi:
      "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
    video: "/assets/jett_c_compressed.mp4",
  },
  x: {
    skill: "BLADE STORM [X]",
    deskripsi:
      "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
    video: "/assets/jett_x_compressed.mp4",
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
