

class Certificate {
  constructor(unique_label, share_class_id, date){
    this.unique_label = unique_label;
    this.share_class_id = share_class_id
    this.date = date;
  }

}

var certificate_1 = Certificate.new('CS-1', date(2016, 5, 10), 7);
var certificate_2 = Certificate.new('CS-2', date(2015, 1, 1), 7);
var certificate_3 = Certificate.new('CS-3', date(2016, 5, 10), 9);

var certificates = [certificate_1, certificate_2, certificate_3]


def groupCertificates(certificates){

}
