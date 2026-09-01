function wyslijMaileKwartalne() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Arkusz1");
  var dataRange = sheet.getDataRange().getValues();
  
  // Pętla od wiersza 2 (pomijamy nagłówki)
  for (var i = 1; i < dataRange.length; i++) {
    var row = dataRange[i];
    var nazwaProd = row[0];
    var email = row[1];
    var status = row[2];
    
    // Sprawdzamy status "Oczekuje" oraz czy jest e-mail
    if (status && status.toLowerCase() === "oczekuje" && email) {
      
      var temat = "Rozliczenie kwartalne - " + nazwaProd;
      
      var tresc = "Dzień dobry,\n\n" +
                  "Proszę o przesłanie danych do rozliczenia 3Q 2026 do dnia 10-tego października. W razie braku otrzymania danych do dnia 15.10 faktury będą wystawiane z naszych danych systemowych, z uwagi na KSEF.\n\n" +
                  "Pozdrawiam,\n\n" +
                  "Katarzyna Kalinowska\n" +
                  "tel. xxx-xxx-xxx\n\n" +
                  "xxxxxxxxx Sp. z o.o. , ul. Testowa 5, 47-000 xxxxxxxx\n" +
                  "http://xxxxxxxxxxxxxxxxx.pl/\n\n" +
                  "Zgodnie z wymogami ogólnego rozporządzenia o ochronie danych osobowych (RODO), informujemy, że: Administratorem Państwa danych osobowych jest xxxxxxxxxxxxx sp. z o.o. z siedzibą w xxxxxxxxxxx, ul. xxxxx, 47-000 xxxxx. Niniejsza wiadomość e-mail zawiera informację poufne i/lub dane osobowe. Podane dane będą przetwarzane wyłącznie w celu komunikacji i realizacji związanych z nią działań. Masz prawo dostępu do swoich danych, poprawiania lub żądania ich usunięcia. Więcej informacji na temat przetwarzania danych osobowych można znaleźć w naszej zakładce RODO https://xxxxxx.pl/rodo/";
      
      // Wysyłka wiadomości z Twojego Gmaila
      GmailApp.sendEmail(email, temat, tresc);
      
      // Aktualizacja statusu na "Wysłane" (Kolumna C -> indeks 3) i wpisanie daty (Kolumna D -> indeks 4)
      sheet.getRange(i + 1, 3).setValue("Wysłane");
      sheet.getRange(i + 1, 4).setValue(new Date());
    }
  }
}
