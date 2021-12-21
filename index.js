let act = "";
let textAct = ["ลงสมัครสภานักเรียน", "แสดงละครสั้นวันปัจฉิม", "งานประชุมผู้ปกครอง", "พ่อ&ลูก สุดฟีล Contest2021", "ผู้ช่วยวิทยากรมหาวิทยาลัยราชภัฏสุราษฎร์ธานี", "ปลูกป่าชายเลน", "จัดแคมป์วิทยาศาสตร์ โรงเรียนบ้านเขาน้อย", "รองชนะเลิศอันดับ 1 3x3 สุราษฎร์ธานี ", "คณะกรรมการแข่งขันบาสเกตบอล", "จิตอาสาพระราชทาน", "ตัวแทนถือพานไหว้ครู", "กิจกรรมอบรม เยาวชนต้นกล้า", "ช่างภาพกิจกรรมต่างๆของโรงเรียน"]
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
let textCer = ["ปฎิบัติหน้าที่สภานักเรียน", "เหรียญทอง ตัดต่อภาพยนตร์ ระดับชาติ", "เหรียญทองชนะเลิศ ตัดต่อภาพยนตร์ ระดับเขต", "เหรียญทอง รองชนะเลิศอันดับที่ 2 2D Animation ระดับชาติ", "เหรียญทอง ชนะเลิศ 2D Animation ระดับเขต", "เหรียญทอง 2D Animation ระดับชาติ", "เหรียญทองอันดับ 2", "เหรียญทองชนะเลิศ 2D Animation ระดับภาคใต้",
    "รองชนะเลิศอันดับ 1 3x3 สุราษฎร์ธานี", "รองชนะเลิศ ระดับเหรียญเงิน สร้างแอนิเมชั่น", "อบรมการผลิตสื่อวิดีโอ", "อบรมพัฒนาทักษะทางวิทยาศาสตร์", "อบรมคุณธรรมจริยธรรม", "อบรมพัฒนาทักษะภาษาไทย", "จิตอาสาช่วยกิจกรรมโรงเรียน", "อบรมสื่อเทคโนโลยี", "อบรมต้นกล้าต้านยาเสพติด", "Suratthani 2 Open House", "อบรมค่ายผู้นำเยาวชนคนรุ่นใหม่", "สอบได้นักธรรมชั้นตรี"]
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
let textLnk = ["ผลงานหนังสั้น เรื่อง Za-was-dee", "ผลงานหนังสั้น เรื่อง คนดีสำคัญกว่าทุกสิ่ง", "เจ้าของเพจ Tai Jang", "แอดมิน เพจ Kidsst.2product", "Intro krujar channel"]
let textLnk2 = ["ประกวดหนังสั้นในรายการ ไทยดีมีมารยาท ชื่อเรื่อง Za-was-dee รับหน้าที่ ตัดต่อ เรียบเรียงเนื้อเรื่อง ชนะรางวัล Poppular Vote ได้เงินรางวัล 10,000บาท", "ผลงานหนังสั้น เรื่อง คนดีสำคัญกว่าทุกสิ่ง รับหน้าที่ในการถ่ายทำ ตัดต่อและเรียบเรียงเนื้อหาของเรื่อง", "เป็นผู้ดูแลเพจเฟซบุ๊ก Tai Jang เป็นเพจที่จัดทำเพือรวบรวมความทรงจำของเพื่อน ๆ น้อง ๆในโรงเรียนสุราษฎร์ธานี ๒ ", "แอดมินผู้ดูแล เพจ Kidsst.2product เป็นเพจที่จำทำเพื่อลงผลงานภาพยนตร์สั้น", "ได้รับทำ intro คลิปวิดีโอประจำช่อง Krujar channelด้วยโปรแกรม Adobe after effects"]
let link = ["https://seeme.me/ch/thaid/qLOzA6", "https://www.youtube.com/watch?v=KKDbDDdvU_k", "https://www.facebook.com/TAIJANGNI01", "https://www.facebook.com/Kidsst.2production", "https://drive.google.com/drive/u/0/folders/13q_28rWDll9ZgLPXR9EEsgVF3SmrIbQw"]
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