function introToTypeScript() {
  let name: string = "osama";
  console.log(name);
  let phone: number = 1127796848;
  console.log(phone);
  phone = 8888;
  console.log(phone);
  let hoppies: string[] = ["osama", "ahmed"];
  console.log(hoppies);
  let x: [string, string, number];
  x = ["ali", "ahmed", 5];
  console.log(x);
  type Person = {
    name: string;
    age: number;
    married: boolean;
    army?: boolean;
  };
  let student: Person = {
    name: "osama",
    age: 21,
    married: false,
  };
  console.log(student.name);
  let people: Person[];

  let newAge: string | number;
  newAge = "20";
  newAge = 20;

  function printNAme(name: string) {
    console.log(name);
  }
  printNAme("osama");

  let newName: any = 25;
  console.log(newName);

  let newValue: unknown = 25;
  console.log(newValue);

  type Teacher = {
    name: string;
    age: number;
  };
  type Helper = Teacher & {
    id: number;
    class: string;
  };

  let item: Helper = {
    id: 2,
    class: "A",
    name: "Khaled",
    age: 25,
  };
  console.log(item);

  type Assistant = {
    gender: string;
    duration: number;
  };

  type Headmaster = Teacher & Helper & Assistant;

  let newPerson: Headmaster = {
    id: 2,
    class: "A",
    name: "Khaled",
    age: 25,
    gender: "male",
    duration: 3,
  };
  console.log(newPerson);

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default introToTypeScript;
