document.addEventListener('DOMContentLoaded', () => {
    const curriculumData = {
        "Semester 1": [
            { id: "S1C1", name: "Construcción del Ser Docente y Rol Pedagógico", prerequisites: [] },
            { id: "S1C2", name: "Historia de la Educación en Chile y Políticas Públicas", prerequisites: [] },
            { id: "S1C3", name: "Introducción a la Educación Especial en el Contexto Educativo", prerequisites: [] },
            { id: "S1C4", name: "Diversidad y Educabilidad Educativa", prerequisites: [] },
            { id: "S1C5", name: "Desarrollo Corporal, Afectivo y Psicomotor en el Ciclo Vital", prerequisites: [] },
            { id: "S1C6", name: "Habilidades Académicas Iniciales de Comunicación Oral y Escrita", prerequisites: [] },
            { id: "S1C7", name: "Práctica de Inducción en el Contexto Educativo y Ciclo Vital", prerequisites: [] },
            { id: "S1C8", name: "Inglés I", prerequisites: [] }
        ],
        "Semester 2": [
            { id: "S2C1", name: "Diversidad y Convivencia Escolar", prerequisites: [] },
            { id: "S2C2", name: "Psicología del Desarrollo Humano", prerequisites: [] },
            { id: "S2C3", name: "Bases para el Aprendizaje", prerequisites: [] },
            { id: "S2C4", name: "Atención Temprana y Crianza en el Ciclo Vital", prerequisites: [] },
            { id: "S2C5", name: "Habilidades Académicas Avanzadas de Comunicación Oral y Escrita", prerequisites: [] },
            { id: "S2C6", name: "Práctica de Iniciación en el Contexto Educativo y Ciclo Vital", prerequisites: ["S1C7"] }, // Práctica S1
            { id: "S2C7", name: "Inglés II", prerequisites: [] }
        ],
        "Semester 3": [
            { id: "S3C1", name: "Teorías del Aprendizaje y del Desarrollo Humano", prerequisites: [] },
            { id: "S3C2", name: "Gestión Curricular en Educación", prerequisites: [] },
            { id: "S3C3", name: "Liderazgo para el Desarrollo de Proyectos Educativos y Sociales", prerequisites: [] },
            { id: "S3C4", name: "Didáctica de la Lectura y Escritura", prerequisites: [] },
            { id: "S3C5", name: "Bases Conceptuales del Desarrollo del Lenguaje y la Comunicación y sus Trastornos", prerequisites: [] }, // Mención TLC
            { id: "S3C6", name: "Práctica de Intervención en el Contexto Educativo", prerequisites: ["S2C6"] }, // Práctica S2
            { id: "S3C7", name: "Inglés III", prerequisites: [] }
        ],
        "Semester 4": [
            { id: "S4C1", name: "Orientación Educacional", prerequisites: [] },
            { id: "S4C2", name: "Apoyo e Intervención en Conductuales, Problemas de la Escuela", prerequisites: [] },
            { id: "S4C3", name: "Didáctica de la Matemática", prerequisites: [] },
            { id: "S4C4", name: "Bases Conceptuales de las Dificultades de Aprendizaje", prerequisites: [] }, // Mención DA
            { id: "S4C5", name: "Práctica de Gestión en el Contexto Educativo", prerequisites: ["S3C6"] }, // Práctica S3
            { id: "S4C6", name: "Introducción a la Fe", prerequisites: [] }
        ],
        "Semester 5": [
            { id: "S5C1", name: "Diseño y Planificación Curricular para Educación Especial", prerequisites: [] },
            { id: "S5C2", name: "Gestión Escolar", prerequisites: [] },
            { id: "S5C3", name: "Análisis de Datos", prerequisites: [] },
            { id: "S5C4", name: "Procesos Evaluativos en los Trastornos del Lenguaje y la Comunicación", prerequisites: ["S3C5"] }, // Mención TLC
            { id: "S5C5", name: "Procesos Evaluativos en las Dificultades de Aprendizaje", prerequisites: ["S4C4"] }, // Mención DA
            { id: "S5C6", name: "Práctica de Gestión de los Aprendizajes en el Contexto Educativo", prerequisites: ["S4C5"] }, // Práctica S4
            { id: "S5C7", name: "Ética Cristiana", prerequisites: [] }
        ],
        "Semester 6": [
            { id: "S6C1", name: "Evaluación de los Aprendizajes en Educación Especial", prerequisites: [] },
            { id: "S6C2", name: "Metodología de la Investigación", prerequisites: [] },
            { id: "S6C3", name: "Estrategias de Convivencia en el Marco de la Diversidad", prerequisites: [] },
            { id: "S6C4", name: "Modelos de Apoyo para los Trastornos del Lenguaje y la Comunicación", prerequisites: ["S5C4"] }, // Mención TLC
            { id: "S6C5", name: "Modelos de Apoyo para las Dificultades de Aprendizaje", prerequisites: ["S5C5"] }, // Mención DA
            { id: "S6C6", name: "Práctica de Investigación en el Contexto Educativo", prerequisites: ["S5C6"] }, // Práctica S5
            { id: "S6C7", name: "Certificación I", prerequisites: [] }
        ],
        "Semester 7": [
            { id: "S7C1", name: "Investigación Acción en la Escuela", prerequisites: [] },
            { id: "S7C2", name: "Implementación de Apoyo para los Trastornos del Lenguaje y la Comunicación", prerequisites: ["S6C4"] }, // Mención TLC
            { id: "S7C3", name: "Implementación de Modelos de Apoyo para las Dificultades de Aprendizaje", prerequisites: ["S6C5"] }, // Mención DA
            { id: "S7C4", name: "Práctica Profesional en el Contexto Educativo", prerequisites: ["S6C6"] }, // Práctica S6
            { id: "S7C5", name: "Certificación II", prerequisites: [] }
        ],
        "Semester 8": [
            { id: "S8C1", name: "Sistema de Grado en Educación", prerequisites: [] },
            { id: "S8C2", name: "Trastornos del Lenguaje y la Comunicación en la Vida Adulta", prerequisites: ["S7C2"] }, // Mención TLC
            { id: "S8C3", name: "Dificultades del Aprendizaje en la Vida Adulta", prerequisites: ["S7C3"] }, // Mención DA
            { id: "S8C4", name: "Práctica Profesional en Lenguaje y Comunicación", prerequisites: ["S7C4"] }, // Práctica S7
            { id: "S8C5", name: "Certificación III", prerequisites: [] }
        ],
        "Semester 9": [
            { id: "S9C1", name: "Optativo de Profundización I", prerequisites: [] },
            { id: "S9C2", name: "Proyectos Educativos para atender a la Diversidad", prerequisites: [] },
            { id: "S9C3", name: "Práctica Profesional en Dificultades de Aprendizaje", prerequisites: ["S7C4"] } // Práctica S7 (shared prerequisite)
        ],
        "Semester 10": [
            { id: "S10C1", name: "Apoyos e Intervención para el Desarrollo Cognitivo", prerequisites: [] },
            { id: "S10C2", name: "Optativo de Profundización II", prerequisites: [] },
            { id: "S10C3", name: "Trabajo Profesional de Investigación", prerequisites: [] }
        ]
    };

    const approvedCourses = new Set(JSON.parse(localStorage.getItem('approvedCourses')) || []);
    const curriculumContainer = document.querySelector('.curriculum-container');
    const blockedMessage = document.getElementById('blocked-message');
    const messageText = document.getElementById('message-text');
    const closeMessageBtn = document.getElementById('close-message');

    // Function to render the curriculum
    function renderCurriculum() {
        curriculumContainer.innerHTML = ''; // Clear existing content
        for (const semesterName in curriculumData) {
            const semesterColumn = document.createElement('div');
            semesterColumn.classList.add('semester-column');
            semesterColumn.innerHTML = `<h3>${semesterName}</h3>`;

            curriculumData[semesterName].forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.classList.add('course-item');
                courseItem.dataset.courseId = course.id;
                courseItem.textContent = course.name;

                if (approvedCourses.has(course.id)) {
                    courseItem.classList.add('approved');
                } else if (!checkPrerequisites(course.id)) {
                    courseItem.classList.add('blocked');
                }

                courseItem.addEventListener('click', () => handleCourseClick(course.id));
                semesterColumn.appendChild(courseItem);
            });
            curriculumContainer.appendChild(semesterColumn);
        }
    }

    // Function to check if a course's prerequisites are met
    function checkPrerequisites(courseId) {
        let allCourses = [];
        for (const sem in curriculumData) {
            allCourses = allCourses.concat(curriculumData[sem]);
        }
        const course = allCourses.find(c => c.id === courseId);

        if (!course || course.prerequisites.length === 0) {
            return true; // No prerequisites or course not found
        }

        for (const prereqId of course.prerequisites) {
            if (!approvedCourses.has(prereqId)) {
                return false; // A prerequisite is not approved
            }
        }
        return true; // All prerequisites are approved
    }

    // Function to get the names of missing prerequisites
    function getMissingPrerequisites(courseId) {
        let allCourses = [];
        for (const sem in curriculumData) {
            allCourses = allCourses.concat(curriculumData[sem]);
        }
        const course = allCourses.find(c => c.id === courseId);
        const missing = [];

        if (course && course.prerequisites.length > 0) {
            for (const prereqId of course.prerequisites) {
                if (!approvedCourses.has(prereqId)) {
                    const prereqCourse = allCourses.find(c => c.id === prereqId);
                    if (prereqCourse) {
                        missing.push(prereqCourse.name);
                    }
                }
            }
        }
        return missing;
    }

    // Handle course click
    function handleCourseClick(courseId) {
        if (approvedCourses.has(courseId)) {
            return; // Already approved, do nothing
        }

        if (checkPrerequisites(courseId)) {
            approvedCourses.add(courseId);
            localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
            renderCurriculum(); // Re-render to update classes
        } else {
            const missing = getMissingPrerequisites(courseId);
            messageText.innerHTML = `Para aprobar "${allCoursesMap.get(courseId).name}", primero debes aprobar los siguientes ramos:<br><ul>${missing.map(m => `<li>${m}</li>`).join('')}</ul>`;
            blockedMessage.style.display = 'block';
        }
    }

    // Close blocked message
    closeMessageBtn.addEventListener('click', () => {
        blockedMessage.style.display = 'none';
    });

    // Create a map for quick lookup of course names by ID (for messages)
    const allCoursesMap = new Map();
    for (const semester in curriculumData) {
        curriculumData[semester].forEach(course => {
            allCoursesMap.set(course.id, course);
        });
    }

    // Initial render
    renderCurriculum();
});
