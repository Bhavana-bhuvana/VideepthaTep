import pandas as pd
import json
import os

def convert_excel_to_json(excel_path, json_output_path):
    # Load the excel file
    df = pd.read_excel(excel_path)
    
    # Fill NaN values with empty strings
    df = df.fillna('')
    
    products = []
    
    # Iterate through rows and extract specific fields
    # Based on usual product export formats, we look for common names
    # If the user says "name of the product category and descriptions and ingredients"
    for _, row in df.iterrows():
        product = {
            "ID": str(row.get('ID', '')),
            "Title": str(row.get('Title', '') or row.get('Product Name', '')),
            "Category": str(row.get('Category', '')),
            "Description": str(row.get('Description', '') or row.get('Rewritten_Description', '')),
            "Ingredients": str(row.get('Ingredients', ''))
        }
        products.append(product)
        
    with open(json_output_path, 'w', encoding='utf-8') as f:
        json.dump(products, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    excel_file = r"d:\GoogeAntigravity\home-page-frontend\public\assets\Videeptha_Products.xlsx"
    output_file = r"d:\GoogeAntigravity\home-page-frontend\src\data\products_full.json"
    
    # Create data directory if it doesn't exist
    if not os.path.exists(os.path.dirname(output_file)):
        os.makedirs(os.path.dirname(output_file))
        
    convert_excel_to_json(excel_file, output_file)
    print(f"Successfully converted {excel_file} to {output_file}")
