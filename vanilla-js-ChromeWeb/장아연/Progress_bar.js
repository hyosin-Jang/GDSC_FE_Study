function AddProgress() {
    const prev_progress= document.getElementById("progress__bar").value
    const curr_progress=prev_progress+ 20;
    document.getElementById("progress__bar").value=curr_progress
  }
  