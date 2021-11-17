let intrasoft = document.getElementById("job_intrasoft");
let datacenter = document.getElementById("job_datacenter");
let techmahindra = document.getElementById("job_techmahindra");
let blackboard = document.getElementById("job_blackboard");

function showIntrasoft() {
  if (intrasoft.style.display === "none") {
    intrasoft.style.display = "block";
    datacenter.style.display = "none";
    techmahindra.style.display = "none";
    blackboard.style.display = "none";
  } else {
    intrasoft.style.display = "none";
  }
}

function showDatacenter() {
  if (datacenter.style.display === "none") {
    datacenter.style.display = "block";
    intrasoft.style.display = "none";
    techmahindra.style.display = "none";
    blackboard.style.display = "none";
  } else {
    datacenter.style.display = "none";
  }
}

function showTechMahindra() {
  if (techmahindra.style.display === "none") {
    techmahindra.style.display = "block";
    intrasoft.style.display = "none";
    datacenter.style.display = "none";
    blackboard.style.display = "none";
  } else {
    techmahindra.style.display = "none";
  }
}

function showBlackboard() {
  if (blackboard.style.display === "none") {
    blackboard.style.display = "block";
    intrasoft.style.display = "none";
    datacenter.style.display = "none";
    techmahindra.style.display = "none";
  } else {
    blackboard.style.display = "none";
  }
}
