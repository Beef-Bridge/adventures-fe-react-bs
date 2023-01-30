export default class Hike {
  id: number;
  title: string;
  picture: string;
  summary: string;
  massif: string;
  activity: string;
  made_at: string;
  distance: number;
  duration: number;
  type: string;
  done_with: string;
  comment: string;
  relive_link: string;
  created: Date;

  constructor(
    id: number,
    title: string = "title",
    picture: string = "http...",
    summary: string = "summary",
    massif: string = "massif",
    activity: string = "activity",
    made_at: string = "made at",
    distance: number = 10,
    duration: number = 10,
    type: string = "type",
    done_with: string = "done with",
    comment: string = "comment",
    relive_link: string = "relive link",
    created: Date = new Date()
  ) {
    this.id = id;
    this.title = title;
    this.picture = picture;
    this.summary = summary;
    this.massif = massif;
    this.activity = activity;
    this.made_at = made_at;
    this.distance = distance;
    this.duration = duration;
    this.type = type;
    this.done_with = done_with;
    this.comment = comment;
    this.relive_link = relive_link;
    this.created = created;
  }
}
