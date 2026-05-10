"""
extract_images.py
-----------------
Run this in the same folder as your index.html.
It will:
  1. Find all base64-embedded images
  2. Save them as files in an images/ subfolder
  3. Write a new index_fixed.html with <img src="images/..."> references
"""

import re, base64, os, sys

INPUT_FILE  = "index.html"
OUTPUT_FILE = "index_fixed.html"
IMAGE_DIR   = "images"

os.makedirs(IMAGE_DIR, exist_ok=True)

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    html = f.read()

counter = [0]

def replace_base64(match):
    prefix     = match.group(1)   # e.g.  src="  or  background-image: url(
    mime       = match.group(2)   # e.g.  image/png
    b64data    = match.group(3)
    suffix     = match.group(4)   # closing char: " or )

    ext = mime.split("/")[-1].replace("jpeg","jpg")
    counter[0] += 1
    filename = f"photo-{counter[0]:02d}.{ext}"
    filepath = os.path.join(IMAGE_DIR, filename)

    # Decode and save
    with open(filepath, "wb") as img_f:
        img_f.write(base64.b64decode(b64data))

    file_size_kb = os.path.getsize(filepath) / 1024
    print(f"  Extracted: {filename}  ({file_size_kb:.0f} KB)")

    # Return replacement
    if suffix == ")":
        return f"{prefix}images/{filename})"
    else:
        return f"{prefix}images/{filename}\""

# Match both src="data:..." and url(data:...) patterns
pattern = re.compile(
    r'(src=["\']|url\()'                      # prefix
    r'data:(image/[a-zA-Z+]+);base64,'        # mime type
    r'([A-Za-z0-9+/=\s]{100,}?)'             # base64 data (min 100 chars)
    r'(["\')])',                               # closing quote or paren
    re.DOTALL
)

print(f"Reading {INPUT_FILE}...")
new_html = pattern.sub(replace_base64, html)

if counter[0] == 0:
    print("No base64 images found. Check the file is correct.")
    sys.exit(1)

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write(new_html)

original_kb = os.path.getsize(INPUT_FILE) / 1024
fixed_kb    = os.path.getsize(OUTPUT_FILE) / 1024

print(f"\nDone! {counter[0]} images extracted to '{IMAGE_DIR}/'")
print(f"Original: {original_kb:.0f} KB  →  Fixed HTML: {fixed_kb:.0f} KB")
print(f"New file saved as: {OUTPUT_FILE}")
print(f"\nNext steps:")
print(f"  1. Rename index_fixed.html → index.html (or test it first)")
print(f"  2. Upload the images/ folder to GitHub alongside index.html")
