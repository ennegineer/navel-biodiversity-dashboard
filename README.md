# Navel biodiversity dashboard

This interactive dashboard explores the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset shows that a small number of microbial species (also called **operational taxonomic units**, or OTUs) were present in more than 70% of people, while others were relatively rare.

## Reading the data

I used the D3 library to read in `samples.json`, which is comprised of the dataset linked above. Once the data is loaded into javascript, variables are filled with the data to populate a dropdown allowing the user to choose a test subject by an ID.

As the user selects different IDs from the dropdown, they can explore the data by seeing the updated bar chart of the top ten OTUs for that subject, a gauge chart showing the frequency in which the subject washes themselves per week, and a bubble chart displaying all OTUs found in the subject.

More details are listed about the subject under the ID selection dropdown.

## Final product

The final product of this project is an interactive website built with HTML, CSS and Javascript, allowing the user to explore the dataset on belly button biodiversity to reach their own conclusions.

![screenshot](sreenshot.JPG)
