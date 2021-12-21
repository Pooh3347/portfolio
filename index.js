let act = "";
let textAct = ["ลงสมัครรับเลือกตั้งสภานักเรียน", "แสดงละครสั้นวันปัจฉิมนิเทศ", "งานประชุมผู้ปกครอง", "พ่อ&ลูก สุดฟีล Contest2021", "ผู้ช่วยวิทยากรมหาวิทยาลัยราชภัฏสุราษฎร์ธานี", "เข้าร่วมปลูกป่าชายเลน", "จัดค่ายวิทยาศาสตร์ โรงเรียนบ้านเขาน้อย", "รองชนะเลิศอันดับ 1 บาสเกตบอล 3x3 สุราษฎร์ธานี", "คณะกรรมการตัดสินกีฬาบาสเกตบอล", "จิตอาสาพระราชทาน", "ตัวแทนถือพานไหว้ครู", "กิจกรรมอบรมเยาวชนต้นกล้า ต้านยาเสพติด", "ช่างภาพในกิจกรรมต่าง ๆ ของโรงเรียน"]
for (let i = 1; i <= 13; i++) {
    act += `
        <div class="col-md-6 mx-auto p-3">
            <div class="card mx-auto shadow">
                <img src="act/${i}.jpg" class="card-img-top img-act" width=640" height="440">
                <div class="card-body">
                    <p class="card-text">${textAct[i - 1]}</p>
                </div>
            </div>
        </div>
          `
}
document.getElementById("image-act").innerHTML = act;
let cer = "";
let textCer = ["คณะกรรมการสภานักเรียน ปีการศึกษา 2564", "เหรียญทอง ตัดต่อภาพยนตร์ ระดับชาติ", "เหรียญทองชนะเลิศ ตัดต่อภาพยนตร์ ระดับเขต", "เหรียญทอง รองชนะเลิศอันดับที่ 2 2D Animation ระดับชาติ", "เหรียญทอง ชนะเลิศ 2D Animation ระดับเขต", "เหรียญทอง 2D Animation ระดับชาติ", "เหรียญทองอันดับ 2 กิจกรรมการประกวดการ์ตูนอนิเมชั่น 2D", "เหรียญทองชนะเลิศ 2D Animation ระดับภาคใต้",
    "รองชนะเลิศอันดับ 1 บาสเกตบอล 3x3 สุราษฎร์ธานี", "รองชนะเลิศ ระดับเหรียญเงิน สร้างอนิเมชั่น", "อบรมการผลิตสื่อวิดีโออย่างสร้างสรรค์เพื่อการเรียนรู้", "อบรมพัฒนาทักษะกระบวนการทางวิทยาศาสตร์", "อบรมส่งเสริมคุณธรรม จริยธรรม", "อบรมเชิงปฎิบัติการพัฒนาทักษะการสื่อสารภาษาไทย", "จิตอาสาทำคุณประโยชน์แก่สถานศึกษาและสังคม", "อบรมการใช้งานอุปกรณ์สื่อเทคโนโลยี", "อบรมเยาวชนต้นกล้า ต้านภัยยาเสพติด", "Suratthani 2 Open House", "อบรมค่ายผู้นำเยาวชนคนรุ่นใหม่", "สอบไล่นักธรรมชั้นตรี"]
for (let i = 1; i <= 20; i++) {
    cer += `
        <div class="col-md-6 mx-auto p-3">
            <div class="card mx-auto shadow">
                <img src="cer/${i}.jpg" class="card-img-top  img-cer" width="640" height="440">
                <div class="card-body">
                    <p class="card-text">${textCer[i - 1]}</p>
                </div>
            </div>
        </div>
          `
}
document.getElementById("image-cer").innerHTML = cer;
let lnk = "";
let textLnk = ["ผลงานหนังสั้น เรื่อง Za-was-dee", "ผลงานหนังสั้น เรื่อง คนดีสำคัญกว่าทุกสิ่ง", "เจ้าของเพจ Tai Jang", "แอดมิน เพจ Kidsst.2production", "Intro krujar channel"]
let textLnk2 = ["ประกวดหนังสั้นในรายการ ไทยดีมีมารยาท ชื่อเรื่อง Za-was-dee รับหน้าที่ ตัดต่อ เรียบเรียงเนื้อเรื่อง ชนะรางวัล Poppular Vote ได้เงินรางวัล 10,000 บาท", "ผลงานหนังสั้น เรื่อง คนดีสำคัญกว่าทุกสิ่ง รับหน้าที่ในการถ่ายทำ ตัดต่อและเรียบเรียงเนื้อหาของเรื่อง", "เป็นผู้ดูแลเพจเฟซบุ๊ก Tai Jang เป็นเพจที่จัดทำเพื่อรวบรวมความทรงจำของเพื่อน ๆ น้อง ๆในโรงเรียนสุราษฎร์ธานี ๒ ", "แอดมินผู้ดูแล เพจ Kidsst.2production เป็นเพจที่จำทำเพื่อลงผลงานภาพยนตร์สั้น", "ได้รับทำ intro คลิปวิดีโอประจำช่อง Krujar channel ด้วยโปรแกรม Adobe After Effects"]
let link = ["https://seeme.me/ch/thaid/qLOzA6", "https://www.youtube.com/watch?v=KKDbDDdvU_k", "https://www.facebook.com/TAIJANGNI01", "https://www.facebook.com/Kidsst.2production", "https://drive.google.com/file/d/1oup5AKgvF4GZmEsPEBkq5iAYwW2I2CTq/view?usp=sharing"]
for (let i = 1; i <= 5; i++) {
    lnk += `
        <div class="col-md-6 mx-auto p-3">
            <div class="card mx-auto shadow">
                <img src="lnk/${i}.jpg" class="card-img-top" >
                <div class="card-body">
                    <p class="card-text">${textLnk[i - 1]}</p>
                </div>
            </div>
        </div> 
        <div class="col-md-6 mx-auto p-5 container  rounded shadow" style="background-color:#fff !important;">
            <p class="fw-bolder">${textLnk2[i - 1]}</p>
            <a href="${link[i - 1]}" target="_blank" class="btn btn-outline-danger">Click Me!!</a>
        </div>
          `
}
document.getElementById("image-lnk").innerHTML = lnk;

