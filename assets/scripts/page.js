// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    
    document.getElementById('dashboard-link').addEventListener('click', () => {
        loadDashboard();
    });
    
    document.getElementById('teachers-link').addEventListener('click', () => {
        loadTeachers();
    });

    document.getElementById('modules-link').addEventListener('click', () => {
        loadModules();
    });

    document.getElementById('subjects-link').addEventListener('click', () => {
        loadSubjects();
    });

    // Load default page
    loadDashboard();
});

function loadDashboard() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="section">
            <h2>Dashboard</h2>
            <p>Welcome to the GeMarge Admin Dashboard.</p>
        </div>
    `;
}

function loadTeachers() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="section">
            <h2>Teachers</h2>
            <p>Manage teachers here.</p>
        </div>
    `;
}

function loadModules() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="section">
            <h2>Modules</h2>
            <p>Manage modules here.</p>
        </div>
    `;
}

function loadSubjects() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="section">
            <h2>Subjects</h2>
            <p>Manage subjects here.</p>
        </div>
    `;
}
