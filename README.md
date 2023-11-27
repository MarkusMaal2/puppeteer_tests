# Puppeteer testid
Sooritasin UI testid [Google](https://www.google.ee) jaoks. Testides kontrollitakse veebirakenduse enamkasutatavaid otsingufunktsioone.

## Testide käivitamine
1. `cd <projekti juurkaust>`
2. `npm install`
3. `node index.js`

## Testid
1. Tavalise otsingu sooritamine
    * Küpsistega nõustumine - küpsistega nõustudes peaks veebilehe uuesti laadimisel aken mitte ilmuma
        1. Külastame Google.com lehte ja veendume, et see on korrektselt laaditud
        2. Leiame üles "Nõustu kõigiga" nupu ja klõpsame seda
        4. Veendume, et küpsiste aken pole enam nähtaval
        5. Laadime lehe uuesti
        6. Veendume, et küpsiste aken pole enam nähtaval
    * Märksõnaga otsimine - sisestades mingisuguse märksõna, peaksid ilmuma sellele vastavad otsingutulemused
        1. Leiame üles otsinguvälja
        2. Sisestame märksõna "Puppeteer" ja vajutame sisestusklahvi
        3. Kontrollime, et märksõna oleks veebilehe pealkirjas ja otsinguväljal
    * Otsingu tulemuse avamine - klõpsates mingisugusel otsingutulemusel peaksime väljuma Google veebirakendusest
        1. Leiame üles otsinguvälja
        2. Sisestame märksõna "Puppeteer" ja vajutame sisestusklahvi
        3. Kontrollime, et märksõna oleks veebilehe pealkirjas ja otsinguväljal
        4. Klõpsame esimesel tulemusel
        5. Veendume, et märksõnaga otsinguvälja poleks veebilehel ja Google poleks mainitud lehe pealkirjas
2. Pildiotsing
    * Pildiotsingusse sisenemine - klõpsates "Pildid" siselingil peaksime jõudma "Google pildid" lehele
        1. Külastame Google.com lehte ja veendume, et see on korrektselt laaditud, seejärel nõustume küpsistega klõpsates "Nõustu kõigiga" nuppu
        2. Leiame üles "Pildid" siselingi ja klõpsame seda
        3. Veendume, et lehekülje pealkirjas oleks "Google pildid" ja "Otsige pildi järgi" nupp oleks nähtav
    * Märksõnaga otsimine - sisestades mingisuguse märksõna, peaksid ilmuma sellele vastavad pildid
        1. Külastame Google.com lehte ja veendume, et see on korrektselt laaditud, seejärel nõustume küpsistega klõpsates "Nõustu kõigiga" nuppu
        2. Leiame üles "Pildid" siselingi ja klõpsame seda
        3. Leiame üles otsinguvälja
        4. Sisestame märksõna "Puppeteer" ja vajutame sisestusklahvi
        5. Kontrollime, et lehekülje pealkirjas oleks sisestatud märksõna
        6. Veendume, et leheküljel oleks nähtaval vähemalt 10 pilti
3. Otsing filtritega
    * Välistava filtri kasutamine - sisestades mingi märksõna ning jättes teatud märksõnad välja lisades neile "-" prefiksi, ei tohiks otsingulehele jääda tulemusi, mis sisaldavad välistatud märksõnu
        1. Külastame Google.com lehte ja veendume, et see on korrektselt laaditud, seejärel nõustume küpsistega klõpsates "Nõustu kõigiga" nuppu
        2. Leiame üles otsinguvälja
        3. Sisestame märksõnad "windows -os -microsoft" ja vajutame sisestusklahvi
        4. Veendume, et leheküljel ei ole märksõnu "os" ja "microsoft" v.a. pealkirjas ja otsinguväljal
    * Tsitaatfiltri kasutamine - sisestades märksõnad jutumärkide vahele, peaksid otsingulehel olevad tulemused sisaldama sisestatud tsitaati
        1. Külastame Google.com lehte ja veendume, et see on korrektselt laaditud, seejärel nõustume küpsistega klõpsates "Nõustu kõigiga" nuppu
        2. Leiame üles otsinguvälja
        3. Sisestame jutumärkidega "The quick brown fox jumps over the lazy dog." ja vajutame sisestusklahvi
        4. Kontrollime, et fraas oleks tulemuste lehel lisaks pealkirjale ja otsinguväljale ka tulemuste loetelus

## Tulemused

### Probleemid
TBD

### Testide kokkuvõta
TBD

### Ebaõnnestunud testid
TBD