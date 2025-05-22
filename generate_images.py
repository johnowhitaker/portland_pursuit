import replicate
import requests
import os

prompts = [
    ("visit_local_park", "A watercolor illustration of a beautiful city park with trees and people relaxing"),
    ("try_new_coffee_shop", "A cozy watercolor illustration of a local coffee shop with people enjoying coffee"),
    ("food_carts", "A vibrant watercolor illustration of Portland food carts with people ordering food"),
    ("tastiest_thai", "A watercolor illustration of a delicious Thai food dish on a table"),
    ("boba_tea", "A watercolor illustration of a cup of boba tea with colorful tapioca pearls"),
    ("biltong_vs_jerky", "A playful watercolor illustration of biltong and jerky side by side"),
    ("gain_2_pounds", "A humorous watercolor illustration of a person happily eating lots of food"),
    ("salt_water_taffy", "A watercolor illustration of colorful salt water taffy candies"),
    ("smell_rose", "A watercolor illustration of a person smelling a blooming rose"),
    ("smell_double_delight", "A watercolor illustration of a Double Delight rose in full bloom"),
    ("steal_berry", "A playful watercolor illustration of a hand picking a berry from a bush"),
    ("disappointed_junco", "A watercolor illustration of a person looking unimpressed at a small bird (Junco)"),
    ("hug_tree", "A watercolor illustration of a person hugging a large tree"),
    ("cool_rock", "A watercolor illustration of a unique, interesting rock on the ground"),
    ("touch_ocean", "A watercolor illustration of a person touching the ocean waves"),
    ("freddies_frozen_food", "A watercolor illustration of a grocery store frozen food aisle with tasty treats"),
    ("cool_treat", "A watercolor illustration of a person enjoying gelato or ice cream"),
    ("find_something_free", "A watercolor illustration of a person finding a cool free item on the street"),
    ("ride_scooter", "A watercolor illustration of a person riding an electric scooter in the city"),
    ("chat_to_neighbor", "A watercolor illustration of two neighbors chatting happily on a sidewalk"),
    ("find_sculpture", "A watercolor illustration of a public sculpture in a city park"),
    ("little_free_library", "A watercolor illustration of a little free library box filled with books"),
    ("feed_rue_bunny", "A watercolor illustration of a person feeding a dandelion to a cute bunny"),
    ("take_the_bus", "A watercolor illustration of a city bus with people getting on"),
    ("small_horse_chained", "A watercolor illustration of a very small, adorable miniature horse with a chain, looking whimsical and cute"),
]

os.makedirs("images", exist_ok=True)

for filename, prompt in prompts:
    image_path = f"images/{filename}.webp"
    if os.path.exists(image_path):
        print(f"Skipping {filename} - already exists")
        continue
    
    print(f"Generating: {filename}")
    output = replicate.run(
        "black-forest-labs/flux-schnell",
        input={
            "prompt": prompt,
            "go_fast": True,
            "num_outputs": 1,
            "aspect_ratio": "1:1",
            "output_format": "webp",
            "output_quality": 80
        }
    )
    image_url = output[0]
    img_data = requests.get(image_url).content
    with open(image_path, "wb") as f:
        f.write(img_data)
    print(f"Saved {image_path}")
