document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quizForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let score = 0;
        const answers = ["q1", "q2", "q3"];
        answers.forEach(q => {
            const val = form[q].value;
            if (val === "yes") score++;
        });
        const result = document.getElementById("result");
        if (score === 0) {
            result.innerText = "Kondisi kamu terlihat stabil. Tetap jaga kesehatan mental!";
        } else if (score === 1 || score === 2) {
            result.innerText = "Kamu mungkin mengalami gejala ringan. Pertimbangkan berbicara dengan psikolog.";
        } else {
            result.innerText = "Tanda-tanda stres tinggi terdeteksi. Kami sarankan konsultasi segera.";
        }
    });
});