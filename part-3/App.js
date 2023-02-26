function App() {
    return (
        <div>
        <Person
            name="Hank"
            age={33}
            hobbies={["climbing", "swimming", "kayaking"]}
        />
        <Person name="Ellen" 
            age={75} 
            hobbies={["yelling", "complaining"]} 
        />
        <Person
            name="Alex"
            age={26}
            hobbies={["surfing", "snowboarding"]}
        />
        <Person
            name="Jack"
            age={102}
            hobbies={["breathing", "groaning", "Tweeting"]}
        />
        </div>
    );
}