class News {
  constructor(title, text, date) {
    this.title = title;
    this.text = text;
    this.tags = [];
    this.date = moment(date);
  }

  print() {
    console.log(this.title);
    console.log(this.text);
    console.log(this.checkDate);
    console.log(this.tags);
  }

  get checkDate() {
    const currentDate = moment();

    if (currentDate.isSame(this.date, 'days')) {
      return 'сьогодні';
    } else if (currentDate.diff(this.date, 'days') <= 7) {
      return this.date.endOf('day').fromNow();
    } else {
      return this.date.format('LL');
    }
  }

  addTag(tags) {
    typeof (tags) === 'string' ? this.tags.push(tags) : this.tags.concat(tags);
  }
}

let news1 = new News('Title 1', 'text 1', '2021-10-17');
news1.addTag('tag 1');
news1.addTag('tag 2', 'tag 3');
news1.print();
