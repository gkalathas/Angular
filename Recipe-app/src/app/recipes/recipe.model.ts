export class Recipe {
  private _name: string;
  private _description: string;
  private _image: string;


  constructor(name: string, description: string, image: string) {
    this._name = name;
    this._description = description;
    this._image = image;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
