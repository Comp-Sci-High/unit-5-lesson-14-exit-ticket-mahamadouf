console.log("Script running...")

// Create a function that tests the post route handler [2 pts]

let base = "https://curly-doodle-r9v5ppxg55r3v6w-3000.app.github.dev"
async function testPost(a, ba, ca, da, ea) {
    try {
        // fill in the path
        const response = await fetch(base + "/create-potion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                label: a,
                effect: ba,
                ingredients: ca,
                color: da,
                isExplosive: ea       
                 })

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}


// Call the function [1 pt]

testPost("Fofana", "Fire", "Everything", "Blue", true)

// Show us the successful POST fetch [1 pt]

