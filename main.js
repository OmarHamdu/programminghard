function sendMessage() {
    const phoneNumber = "01508874734";
    const message = "مرحباً ENG OMAR، أريد الاستفسار عن منتجاتكم وطرق الدفع";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}