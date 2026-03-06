import pandas as pd
import json
import os

os.makedirs('d:/GoogeAntigravity/home-page-frontend/src/data', exist_ok=True)
os.makedirs('d:/GoogeAntigravity/home-page-frontend/public/product_images', exist_ok=True)

df = pd.read_excel('d:/GoogeAntigravity/BlissTree_Products_Final.xlsx')
df = df.fillna('')
records = df.to_dict('records')

with open('d:/GoogeAntigravity/home-page-frontend/src/data/products.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, indent=2)
print("Extracted products to JSON.")
