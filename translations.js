// ================================
// TRANSLATION DATA - VIETNAMESE ONLY
// English uses default HTML content
// ================================

const translations = {
    vi: {
        // Navigation
        nav_home: 'Trang chủ',
        nav_about: 'Giới thiệu',
        nav_education: 'Học vấn & Kinh nghiệm',
        nav_projects: 'Dự án Kỹ thuật',
        nav_skills: 'Kỹ năng',
        
        // Home section
        home_name: 'Hồ Minh Dũng',
        home_title: 'Kỹ sư Robot và Cơ điện tử',
        home_location: 'Hà Nội, Việt Nam',
        home_resume_title: 'Tải CV của tôi tại đây',
        
        // Section titles
        section_about: 'Giới thiệu',
        section_education: 'Học vấn & Kinh nghiệm',
        section_projects: 'Dự án Kỹ thuật',
        section_skills: 'Kỹ năng',
        
        // Subsection titles
        subsection_education: 'Học vấn',
        subsection_experience: 'Kinh nghiệm',
        
        // About content
        about_p1: 'Tôi là Kỹ sư Robot và Cơ điện tử đến từ Hà Nội, tốt nghiệp Cử nhân Kỹ thuật Loại Giỏi tại RMIT Việt Nam. Tôi chuyên phát triển hệ thống robot tự hành cho ứng dụng dịch vụ thông minh với chuyên môn về điều hướng tự động, thị giác máy tính và tích hợp IoT nhúng.',
        
        about_p2: 'Hiện tại tại Phenikaa NEO, tôi làm việc trên robot dịch vụ tự hành cho bệnh viện, sự kiện và nông nghiệp. Tôi phát triển hệ thống điều hướng dựa trên ROS2 và tích hợp thị giác máy tính trên nền tảng Edge AI để theo dõi và tương tác với con người. Công việc của tôi trải dài trên toàn bộ hệ thống robot—từ firmware nhúng và truyền thông không dây đến thuật toán điều hướng—tập trung vào các hệ thống thực tế như tránh va chạm đa robot, tích hợp thang máy cho di chuyển đa tầng, và tương tác con người dựa trên cảm biến.',
        
        about_p3: 'Mục tiêu của tôi là trở thành kỹ sư robot tự hành làm việc xuyên suốt thiết kế phần cứng, phát triển nhúng và thuật toán điều hướng để phát triển giải pháp tự hành tin cậy cho môi trường thực tế phức tạp.',
        
        // Education
        edu_rmit_degree_1: 'Cử nhân Kỹ thuật',
        edu_rmit_degree_2: 'Ngành Kỹ thuật Robot và Cơ điện tử',
        edu_rmit_honours: 'Loại Giỏi: Hạng Nhì Bậc A (2A)',
        edu_rmit_gpa: 'GPA: 3.1/4.0',
        edu_hnams_major: 'Chuyên Tin',
        
        // Experience - Phenikaa
        exp_phenikaa_company: 'Công ty Cổ phần Phenikaa-X / Phenikaa NEO',
        exp_phenikaa_role_1: 'Kỹ sư Robot và IoT',
        exp_phenikaa_date_1: '(Tháng 12/2024 - Hiện tại)',
        exp_phenikaa_1_1: 'Phát triển hệ thống nhúng cho robot dịch vụ thông minh (giao thuốc, lễ tân, hỗ trợ sự kiện)',
        exp_phenikaa_1_2: 'Lập trình trên nền tảng Edge AI cho điều hướng tự động, thị giác máy tính và tương tác người-robot',
        exp_phenikaa_1_3: 'Thiết kế kiến trúc IoT tích hợp giao tiếp đa robot và tự động hóa thang máy cho di chuyển đa tầng',
        
        exp_phenikaa_role_2: 'Thực tập sinh Kỹ thuật Robot',
        exp_phenikaa_date_2: '(Tháng 7/2024 - Tháng 11/2024)',
        exp_phenikaa_2_1: 'Phát triển hệ thống điều hướng tự động cho robot ngoài trời sử dụng ROS2/Nav2',
        exp_phenikaa_2_2: 'Triển khai giao tiếp CAN bus và thuật toán odometry mô hình Ackermann',
        exp_phenikaa_2_3: 'Tích hợp hệ thống GPS/RTK và lập kế hoạch đường đi với khả năng lùi',
        
        // Experience - Bosch
        exp_bosch_role: 'Thực tập sinh Phát triển Phần mềm Nhúng',
        exp_bosch_1: 'Kiểm thử dự án AUTOSAR tập trung vào dịch vụ UDS qua giao thức CAN',
        exp_bosch_2: 'Phát triển thư viện kiểm thử DoIP và tối ưu hóa công cụ kiểm thử FBL',
        exp_bosch_3: 'Tạo công cụ phân tích LDF tự động và tạo test giao thức LIN',
        
        // Projects
        project_1_title: 'Robot Giao Thuốc',
        project_1_org: 'Công ty Cổ phần Phenikaa-X - Bệnh viện Đại học Phenikaa',
        project_1_desc_1: 'Phát triển firmware nhúng cho bo mạch điều khiển IoT (C/ESP32)',
        project_1_desc_2: 'Tích hợp Ethernet và WebSocket để giao tiếp hệ thống với các tầng SLAM và Ứng dụng',
        project_1_desc_3: 'Triển khai module SIM 4G cho mạng và gọi điều dưỡng',
        project_1_desc_4: 'Tạo giao thức ESP-Now cho tránh va chạm giữa các robot',
        project_1_desc_5: 'Phát triển giao tiếp LoRa với hệ thống loa để thông báo giao hàng',
        project_1_desc_6: 'Xây dựng thiết bị loa IoT với bộ thu LoRa, cấu hình web server và cập nhật OTA',
        
        project_2_title: 'Robot Hỗ trợ/Lễ Tân',
        project_2_org: 'Công ty Cổ phần Phenikaa-X',
        project_2_section_1: 'Điện toán Edge AI',
        project_2_section_1_platform: '(RK3399/Aidlux)',
        project_2_desc_1: 'Phát triển điều khiển động cơ (CAN, RS485, VESC)',
        project_2_desc_2: 'Tích hợp nhận diện khuôn mặt để theo dõi và đi theo người',
        project_2_desc_3: 'Triển khai nhận diện mã QR cho check-in sự kiện',
        project_2_section_2: 'Tích hợp IoT:',
        project_2_desc_4: 'Thiết kế giao diện WebSocket thời gian thực cho telemetry cảm biến và điều khiển IoT robot',
        project_2_desc_5: 'Phát triển hệ thống điều khiển thang máy cho di chuyển đa tầng: WT32-ETH01 điều khiển cabin, Python server xử lý lệnh từ cloud',
        project_2_desc_6: 'Triển khai micro wake-word cho hội thoại AI',
        project_2_desc_7: 'Lắp đặt máy in vé cho check-in',
        project_2_desc_8: 'Thiết kế giá đỡ in 3D',
        
        project_3_title: 'Robot Tự Hành Ngoài Trời',
        project_3_org: 'Công ty Cổ phần Phenikaa-X',
        project_3_desc_1: 'Phát triển hệ thống điều hướng sử dụng ROS2 và Nav2 cho môi trường ngoài trời',
        project_3_desc_2: 'Thiết kế module giao tiếp CAN bus để điều khiển động cơ',
        project_3_desc_3: 'Xây dựng thuật toán odometry và điều khiển cho mô hình Ackermann',
        project_3_desc_4: 'Tích hợp hệ thống GPS/RTK',
        project_3_desc_5: 'Phát triển lập kế hoạch đường đi hỗ trợ chuyển động lùi',
        project_3_desc_6: 'Hoàn thành kiểm thử mô phỏng',
        
        project_4_title: 'Các Yếu Tố Ảnh Hưởng Đến Độ Chính Xác Robot trong Ứng Dụng Robot-Thị Giác và Giải Pháp',
        project_4_org: 'ABB Automation and Electrification (Vietnam) - Dự án Nghiên cứu Đại học',
        project_4_section: 'Đồ án Tốt nghiệp:',
        project_4_desc_1: 'Nghiên cứu nguyên lý robot công nghiệp và hệ thống thị giác',
        project_4_desc_2: 'Phân tích các yếu tố ảnh hưởng độ chính xác robot dẫn đường bằng thị giác',
        project_4_desc_3: 'Xác định nguồn sai số: hiệu chuẩn camera, ánh sáng, sai số động học',
        project_4_desc_4: 'Đề xuất và kiểm chứng giải pháp cải thiện độ chính xác',
        
        // Skills
        skill_cat_1: 'Hệ thống Robot & Tự động hóa',
        skill_1_1: 'ROS2 & Nav2: Phát triển robot, điều hướng, SLAM, lập kế hoạch đường đi',
        skill_1_2: 'Điều khiển Robot: Odometry, fusion cảm biến, lập kế hoạch chuyển động',
        skill_1_3: 'Thị giác máy tính: Phát hiện đối tượng, nhận diện khuôn mặt, nhận diện mã QR',
        skill_1_4: 'Cảm biến: LiDAR, IMU, GPS/RTK, camera, điều khiển động cơ',
        
        skill_cat_2: 'Hệ thống Nhúng & IoT',
        skill_2_1: 'Nền tảng: ESP32, STM32',
        skill_2_2: 'Giao thức: CAN, RS485, WebSocket, HTTP, MQTT, SPI, I2C, UART, LoRa, ESP-Now',
        skill_2_3: 'Module: 4G SIM, RFID, LoRa, Radar (HLK), nhận diện wake-word, ...',
        skill_2_4: 'Tính năng: Cập nhật OTA, cấu hình web server',
        skill_2_5: 'Phần cứng: Hàn, lắp ráp, thiết kế và in 3D',
        
        skill_cat_3: 'Lập trình & Công cụ',
        skill_3_1: 'C/C++, Python',
        skill_3_2: 'Git, Confluence, Jira',
        skill_3_3: 'Linux, Docker, ESP-IDF',
        skill_3_4: 'SOLIDWORKS',
        
        skill_cat_4: 'Kỹ năng Kỹ thuật',
        skill_4_1: 'Thiết kế kiến trúc hệ thống',
        skill_4_2: 'Tích hợp và kiểm thử phần cứng',
        skill_4_3: 'Tối ưu hóa thuật toán',
        skill_4_4: 'Giải quyết vấn đề',
        skill_4_5: 'Viết tài liệu kỹ thuật',
        
        skill_cat_5: 'Ngôn ngữ',
        skill_5_1: 'Học đại học bằng tiếng Anh',
        skill_5_2: 'Tiếng Anh — IELTS 6.5 (2019)',
        skill_5_3: 'Tiếng Nhật — JLPT N5',
        
        // Footer
        footer_title: 'Hãy liên hệ với tôi!',
        footer_resume: 'Tải CV',
    }
};