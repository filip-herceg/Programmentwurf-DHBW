# Abgabe zur Lernveranstaltung Programmiersprachen im Web.
### Anmerkung:
Es wurde keine explizite Einschränkung der Verwendung von JavaScript in der Aufgabenstellung erwähnt, daher wird angenommen, dass die Verwendung von JavaScript erlaubt ist.

# Lightmesh - Internetdienstleistungen
Diese Webseite stellt das Unternehmen Lightmesh und dessen Internetdienstleistungen vor. Der Benutzer kann sich über die verschiedenen Angebote von Lightmesh informieren und sich mit dem Unternehmen in Kontakt setzen.

## Funktionen
- Übersicht über verschiedene Internet-Pakete von Lightmesh und deren Preise
- Möglichkeit, sich über das Unternehmen Lightmesh und dessen Geschichte zu informieren
- Kontaktformular, um sich mit Lightmesh in Verbindung zu setzen
- Slider mit Bildern, die das Angebot von Lightmesh visualisieren

## Verwendung
1. Öffne die Webseite in deinem Browser.
2. Navigiere durch die verschiedenen Seiten, indem du auf die Navigation links oben klickst oder das Dropdown-Menü verwendest.
3. Erfahre mehr über das Unternehmen Lightmesh und seine Angebote, indem du die entsprechenden Seiten aufrufst.
4. Verwende das Kontaktformular, um dich mit Lightmesh in Verbindung zu setzen, wenn du Fragen oder Anregungen hast.

## index.html
Die index.html ist die Hauptseite der Website. Sie enthält den Navigationsbereich, den Header mit dem Slider und den Hauptinhalt der Seite. Der Slider wird durch JavaScript gesteuert und die Bilder werden aus dem Verzeichnis "assets/images" geladen. Im Hauptinhalt werden Informationen über die verschiedenen Internetpakete von Lightmesh angezeigt und es gibt eine Tabelle mit Kundenbewertungen. Die Seite verwendet auch externe CSS Dateien aus dem Verzeichnis "style" und eine JavaScript Datei aus dem Verzeichnis "script".

## sub/options.html
Die options.html ist eine Unterseite, die weitere Informationen über die verfügbaren Internetpakete von Lightmesh bereitstellt. Es gibt eine Tabelle mit detaillierten Angaben zu Geschwindigkeit, Preis und Inklusiveleistungen für jedes Paket.

## sub/about.html
Die about.html ist eine weitere Unterseite, die Informationen über das Unternehmen Lightmesh bereitstellt. Es gibt eine kurze Übersicht über die Geschichte und das Team von Lightmesh sowie eine Liste von Fakten und Zahlen.

## Kontakt
Am Ende der index.html gibt es einen Kontaktbereich mit einem Formular, über das die Benutzer mit Lightmesh in Kontakt treten können. Das Formular wird mithilfe von HTML und CSS gestaltet und das Absenden der Daten wird über eine PHP Datei verarbeitet.

# Bezug Aufgabenstellung
## Listen:
index.html#main
```HTML
 <p>Wir bieten drei verschiedene Pakete an:</p>
    <ul>
        <li>Basic: 50 Mbit/s für 19,99 € im Monat</li>
        <li>Premium: 100 Mbit/s für 29,99 € im Monat</li>
        <li>Pro: 200 Mbit/s für 49,99 € im Monat</li>
    </ul>
```

sub/careers.html
```HTML
<ul>
    <li>Vertriebsexperte</li>
    <li>Kundenbetreuer</li>
    <li>Techniker</li>
    <li>Marketing-Assistent</li>
</ul>
```

sub/careers.html
```HTML
<ul>
    <li>Vertriebsexperte</li>
    <li>Kundenbetreuer</li>
    <li>Techniker</li>
    <li>Marketing-Assistent</li>
</ul>
```

sub/privacy.html
```HTML
<ul>
    <li>Kontaktinformationen (z.B. Name, Adresse, E-Mail-Adresse, Telefonnummer)</li>
    <li>Zahlungsinformationen (z.B. Kreditkartennummer)</li>
    <li>Informationen zu Ihrem Internetgebrauch (z.B. verwendete Dienste, verbundene Geräte, IP-Adresse)</li>
</ul>
```

sub/setup.html
```HTML
<ol>
    <li>Schließen Sie das mitgelieferte Ethernet-Kabel an Ihren Router und an den Internetanschluss an.</li>
    <li>Schalten Sie Ihren Router ein und warten Sie, bis die Internetverbindung hergestellt ist.</li>
    <li>Schließen Sie das mitgelieferte Netzteil an Ihren Lightmesh-Modem-Router und an eine Steckdose an.</li>
    <li>Schalten Sie Ihren Lightmesh-Modem-Router ein und warten Sie, bis die Internetverbindung hergestellt ist. Dies kann einige Minuten dauern.</li>
    <li>Öffnen Sie einen Webbrowser und geben Sie "192.168.0.1" in die Adressleiste ein. Sie werden aufgefordert, ein Benutzername und ein Passwort einzugeben. Geben Sie die Anmeldeinformationen ein, die Sie per E-Mail erhalten haben, und klicken Sie auf "Anmelden".</li>
    <li>Folgen Sie den Anweisungen auf dem Bildschirm, um Ihre Internetverbindung einzurichten und Ihr Passwort zu ändern.</li>
    <li>Sie sind jetzt bereit, das Internet zu nutzen! Schließen Sie alle Ihre Geräte (z.B. Computer, Smartphone, Smart-TV) an Ihren Lightmesh-Modem-Router an und genießen Sie den schnellen und zuverlässigen Internetzugang von Lightmesh.</li>
</ol>
```

## Tabellen:
sub/options.html
```HTML
<table>
    <tr>
        <th>Paket</th>
        <th>Geschwindigkeit</th>
        <th>Preis pro Monat</th>
    </tr>
    <tr>
        <td>Basic</td>
        <td>50 Mbit/s</td>
        <td>19,99 €</td>
    </tr>
    <tr>
        <td>Premium</td>
        <td>100 Mbit/s</td>
        <td>29,99 €</td>
    </tr>
    <tr>
        <td>Pro</td>
        <td>200 Mbit/s</td>
        <td>49,99 €</td>
    </tr>
</table>
```

sub/faq.html
```HTML
<table>
    <tr>
        <th>Frage</th>
        <th>Antwort</th>
    </tr>
    <tr>
        <td>Was ist Lightmesh?</td>
        <td>Lightmesh ist ein Internet-Provider, der sich speziell an Studenten richtet. Wir bieten schnelle und zuverlässige Internetverbindungen zu erschwinglichen Preisen.</td>
    </tr>
    <tr>
        <td>Wie kann ich mich für Lightmesh anmelden?</td>
        <td>Besuchen Sie unsere Seite <a href="/options.html">Optionen</a>, um mehr über unsere verfügbaren Dienste und Preise zu erfahren. Wenn Sie sich für einen unserer Dienste entscheiden, können Sie sich auf unserer Seite <a href="/signup.html">Anmelden</a> anmelden.</td>
    </tr>
    <tr>
        <td>Gibt es eine Vertragslaufzeit?</td>
        <td>Nein, wir bieten keine Vertragslaufzeiten an. Sie können unsere Dienste jederzeit kündigen oder wechseln.</td>
    </tr>
    <tr>
        <td>Kann ich meinen Dienst auf Pausieren?</td>
        <td>Ja, Sie können Ihren Dienst für einen festgelegten Zeitraum pausieren. Bitte kontaktieren Sie unseren Kundenservice, um weitere Informationen zu erhalten.</td>
    </tr>
</table>
```

sub/options.html
```HTML
<table>
    <tr>
        <th>Paket</th>
        <th>Geschwindigkeit</th>
        <th>Preis pro Monat</th>
    </tr>
    <tr>
        <td>Basic</td>
        <td>50 Mbit/s</td>
        <td>19,99 €</td>
    </tr>
    <tr>
        <td>Premium</td>
        <td>100 Mbit/s</td>
        <td>29,99 €</td>
    </tr>
    <tr>
        <td>Pro</td>
        <td>200 Mbit/s</td>
        <td>49,99 €</td>
    </tr>
</table>
```

sub/reviews.html
```HTML
<table>
    <tr>
        <th>Kunde</th>
        <th>Bewertung</th>
        <th>Kommentar</th>
    </tr>
    <tr>
        <td>Max Muster</td>
        <td>5 von 5</td>
        <td>Ich bin sehr zufrieden mit Lightmesh. Der Internetzugang ist schnell und stabil und der Kundenservice ist immer hilfsbereit und freundlich.</td>
    </tr>
    <tr>
        <td>Anna Beispiel</td>
        <td>4 von 5</td>
        <td>Ich habe bisher keine Probleme mit Lightmesh gehabt. Der Preis ist auch in Ordnung, allerdings fände ich es schön, wenn es noch mehr Optionen für das Premium-Paket gäbe.</td>
    </tr>
    <tr>
        <td>Tom Test</td>
        <td>3 von 5</td>
        <td>Ich hatte leider einige Ausfälle bei meinem Internetzugang. Der Kundenservice war aber schnell und hilfsbereit bei der Lösung des Problems.</td>
    </tr>
</table>
```

## Bilder:
index.html#main, style/gallery.css, script/gallery.js
```HTML
<div id="gallerybox">
    <div class="slider" id="slider1">
        <div class="slider-inner">
            <img src="assets/images/What-is-an-ISP-min.jpg" alt="Bild 1">
            <img src="assets/images/speed.jpg" alt="Bild 2">
            <img src="assets/images/istockphoto-613786186-170667a.jpg" alt="Bild 3">
            <img src="assets/images/Student-Laptop.jpg" alt="Bild 4">
        </div>
        <button class="slider-prev">&lt;</button>
        <button class="slider-next">&gt;</button>
    </div>
    <script src="script/gallery.js"></script>
</div>
```

## Verzweigungen auf andere Seiten:
index.html#nav
```HTML
<nav>
    <div id="navlogo">
        <a href="index.html"><img src="assets/images/placeholder.com-logo3.png" alt="Lightmesh Logo"></a>
    </div>
    <div id="navbuttons">
        <label>
            <select onchange="location = this.value">
                <option value="index.html">Home</option>
                <option value="sub/about.html">Über uns</option>
                <option value="sub/options.html">Optionen & Preise</option>
                <option value="sub/reviews.html">Kundenrezensionen</option>
                <option value="sub/setup.html">Einrichtung</option>
                <option value="sub/issuereport.html">Störungsmeldung</option>
                <option value="sub/faq.html">Fragen und Antworten</option>
                <option value="sub/news.html">Neuigkeiten</option>
                <option value="sub/privacy.html">Datenschutz</option>
                <option value="sub/terms.html">Bedingungen</option>
                <option value="sub/careers.html">Karriere</option>
                <option value="sub/contact">Kontakt</option>
            </select>
        </label>
    </div>
</nav>
```

sub/*
```HTML
<a href="../index.html"><img class="logo" src="../assets/images/placeholder.com-logo3.png" alt="Lightmesh Logo"></a>
```

sub/faq.html
```HTML
<td>Besuchen Sie unsere Seite <a href="/options.html">Optionen</a>, um mehr über unsere verfügbaren Dienste und Preise zu erfahren.</td>
```

sub/news.html
```HTML
        <p>Wir freuen uns, bekannt geben zu können, dass wir ab sofort neue Dienste anbieten. Unsere neue "Ultra-Schnell"-Option bietet Geschwindigkeiten von bis zu 1 Gbit/s und ist perfekt für power-user und Gamer. Weitere Informationen finden Sie auf unserer Seite <a href="/options.html">Optionen</a>.</p>
```

sub/privacy.html
```HTML
<p>Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre Informationen vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen. Alle Ihre Informationen werden von uns sorgfältig geschützt, aber wir können keine absolute Sicherheit gewährleisten. Wenn Sie Bedenken bezüglich der Sicherheit Ihrer Informationen haben, kontaktieren Sie uns bitte über unsere Seite <a href="/contact.html">Kontakt</a>.</p>
```
```HTML
<p>Wenn Sie Fragen oder Anmerkungen zu unseren Datenschutzrichtlinien haben, kontaktieren Sie uns bitte über unsere Seite <a href="/contact.html">Kontakt</a>.</p>
```

## einzeilige und mehrzeilige Eingabefelder:
index.html#contact
```HTML
<div id="formular">
    <form>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="email">E-Mail:</label><br>
        <input type="email" id="email" name="email"><br>
        <label for="message">Nachricht:</label><br>
        <textarea id="message" name="message"></textarea><br>
        <input type="submit" value="Senden">
    </form>
</div>
```

sub/contact.html
```HTML
<div id="formular">
    <form>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="email">E-Mail:</label><br>
        <input type="email" id="email" name="email"><br>
        <label for="message">Nachricht:</label><br>
        <textarea id="message" name="message"></textarea><br>
        <input type="submit" value="Senden">
    </form>
</div>
```

style/main.css
```CSS
#formular input[type="text"], #formular input[type="email"], #formular input[type="tel"], #formular textarea {
    width: 70%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
}

#formular input[type="submit"] {
    width: 50%;
    background-color: #333;
    color: #ffffff;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

## Radio-Buttons, Checkboxen:
sub/options.html
```HTML
<div id="buchen">
    <label for="basic">Wähle ein Paket:</label><br>
    <input type="radio" id="basic" name="paket" value="basic" checked>Basic<br>
    <input type="radio" id="premium" name="paket" value="premium">Premium<br>
    <input type="radio" id="pro" name="paket" value="pro">Pro<br>
</div>
```

sub/issuereport.html
```HTML
<div id="störungsmeldung">
    <h2>Störungsmeldung</h2>
    <p>Bitte geben Sie hier Ihre Störungsmeldung ein:</p>
    <p>Ich habe momentan folgende Störungen:</p>
    <br>
    <input type="checkbox" id="keineVerbindung" name="störungen" value="keineVerbindung">
    <label for="keineVerbindung"> Keine Verbindung</label><br>
    <input type="checkbox" id="langsameVerbindung" name="störungen" value="langsameVerbindung">
    <label for="langsameVerbindung"> Langsame Verbindung</label><br>
    <input type="checkbox" id="abbrüche" name="störungen" value="abbrüche">
    <label for="abbrüche"> Verbindungsabbrüche</label><br>
    <input type="checkbox" id="sonstige" name="störungen" value="sonstige">
    <label for="sonstige"> Sonstige Störungen</label><br><br>
    <button type="submit">Absenden</button>
</div>
```

## Auswahllisten mit einer und mit mehreren Auswahlmöglichkeiten:
index.html#nav
```HTML
<nav>
    <div id="navlogo">
        <a href="index.html"><img src="assets/images/placeholder.com-logo3.png" alt="Lightmesh Logo"></a>
    </div>
    <div id="navbuttons">
        <label>
            <select onchange="location = this.value">
                <option value="index.html">Home</option>
                <option value="sub/about.html">Über uns</option>
                <option value="sub/options.html">Optionen & Preise</option>
                <option value="sub/reviews.html">Kundenrezensionen</option>
                <option value="sub/setup.html">Einrichtung</option>
                <option value="sub/issuereport.html">Störungsmeldung</option>
                <option value="sub/faq.html">Fragen und Antworten</option>
                <option value="sub/news.html">Neuigkeiten</option>
                <option value="sub/privacy.html">Datenschutz</option>
                <option value="sub/terms.html">Bedingungen</option>
                <option value="sub/careers.html">Karriere</option>
                <option value="sub/contact">Kontakt</option>
            </select>
        </label>
    </div>
</nav>
```
