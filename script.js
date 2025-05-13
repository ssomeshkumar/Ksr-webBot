document.addEventListener('DOMContentLoaded', function() {
    const loginPage = document.getElementById('loginPage');
    const signupPage = document.getElementById('signupPage');
    const faqPage = document.getElementById('faqPage');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const faqForm = document.getElementById('faqForm');
    const faqResponse = document.getElementById('faqResponse');



    faqForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const question = document.getElementById('faqQuestion').value;
        const answer = generateAnswer(question);
        faqResponse.textContent = answer;
        faqResponse.style.display = "block"
    });

    function generateAnswer(question) {
        // Mock AI function to generate an answer
        const answers = {
            "What are the admission requirements": "The admission requirements include a high school diploma, standardized test scores, and a completed application form.",
            "How do I apply": "You can apply online through our website by filling out the application form and submitting the required documents.",
            "What is the deadline for applications": "The deadline for applications is usually December 1st for the fall semester.",
            "Can I apply for financial aid": "Yes, you can apply for financial aid by submitting the FAFSA form and any other required documents.",
            "what is your name":"KSRCE chatbot.",
        };
        return answers[question] || "I'm sorry, I don't have an answer to that question.";
    }
});