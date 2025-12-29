// 메모 저장 기능
function saveQuestion(type) {
    const textarea = document.getElementById(`question-${type}`);
    const question = textarea.value.trim();
    
    if (question === '') {
        alert('내용을 입력해주세요.');
        return;
    }
    
    // localStorage에 저장
    const key = `question-${type}`;
    localStorage.setItem(key, question);
    
    alert('메모가 저장되었습니다!');
}

// 페이지 로드 시 저장된 메모 불러오기
document.addEventListener('DOMContentLoaded', function() {
    const textareas = document.querySelectorAll('textarea[id^="question-"]');
    
    textareas.forEach(textarea => {
        const id = textarea.id;
        const type = id.replace('question-', '');
        const savedQuestion = localStorage.getItem(`question-${type}`);
        
        if (savedQuestion) {
            textarea.value = savedQuestion;
        }
    });
});