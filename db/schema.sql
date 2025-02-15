-- สร้างตาราง events
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    date DATE,
    time TIME,
    petAllowed BOOLEAN,
    organizer VARCHAR(255)
);