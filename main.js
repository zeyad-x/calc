// الحصول على العنصر الذي يعرض القيم
let display = document.getElementById("display");

// الحصول على كل الأزرار داخل الصفحة
let buttons = document.querySelectorAll("button");

// متغير لتخزين المدخلات
let input = "";

// إضافة حدث النقر لكل زرار
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText; // الحصول على نص الزر

        if (value === "AC") {
            // زر "AC" يمسح الشاشة
            input = "";
        } else if (value === "=") {
            // عند الضغط على "=", يتم حساب النتيجة
            try {
                input = eval(input); // تنفيذ العملية الحسابية
            } catch {
                input = "خطأ"; // إذا كان هناك خطأ في الحساب
            }
        } else if (value === "C") {
            // زر "C" يمسح الرقم الأخير
            input = input.slice(0, -1);
         }else{ // إضافة القيمة إلى المدخلات
            input += value;
        }

        // تحديث العرض
        display.innerText = input;
    });
});
