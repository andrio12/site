exports.index = function(req, res) {
  res.render('index', {
      title: 'NBA Ísland - Forsíða'
  });
}

exports.frettir = function(req, res) {
    res.render('frettir', {
        title: 'NBA Ísland - Fréttir'
    });
}

exports.leikmenn_og_lid = function(req, res) {
    res.render('index', {
        title: 'Helstu Leikmenn og Lið'
    });
}

exports.aftur_til_fortidar = function(req, res) {
    res.render('index', {
        title: 'Aftur til fortíðar'
    });
}

exports.baekur_og_heimildamyndir = function(req, res) {
    res.render('index', {
        title: 'Bækur og Heimildamyndir'
    });
}

exports.hvad_ef = function(req, res) {
    res.render('index', {
        title: 'Hvað ef?'
    });
}