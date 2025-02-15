-- แทรกข้อมูลลงในตาราง events
INSERT INTO events (category, title, description, location, date, time, petAllowed, organizer) VALUES
('Music', 'Concert', 'A live concert', 'London', '2021-07-01', '19:00:00', FALSE, 'Live Nation'),
('Art', 'Art Exhibition', 'An exhibition of modern art', 'Paris', '2021-08-15', '10:00:00', TRUE, 'Art World'),
('Technology', 'Tech Conference', 'A conference about the latest in tech', 'San Francisco', '2021-09-10', '09:00:00', FALSE, 'Tech Innovators'),
('Food', 'Food Festival', 'A festival with food from around the world', 'New York', '2021-10-05', '12:00:00', TRUE, 'Food Lovers'),
('Sports', 'Marathon', 'A city marathon', 'Berlin', '2021-11-20', '08:00:00', FALSE, 'Run Club'),
('Theater', 'Play', 'A local theater play', 'Chicago', '2021-12-01', '18:00:00', FALSE, 'Theater Group');