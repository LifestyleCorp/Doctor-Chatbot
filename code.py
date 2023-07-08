import nltk
import random
nltk.download('punkt')
nltk.download('stopwords')

from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# Set up the chatbot
def greeting():
    bot_greeting_msgs = [
        "Hi! I'm a doctor chatbot. I can answer all your health-related questions. How can I help you?",
        "Hi there! I'm a doctor chatbot. I'm here to help you with any health-related questions. What can I do for you?",
        "Hi there! I'm a doctor chatbot, and I'm here to help you with any health-related questions. What do you need help with?"
    ]

    return random.choice(bot_greeting_msgs)


def process_user_input(user_input):
    user_input_tokens = word_tokenize(user_input)  # Tokenize the user input
    user_input_tokens = [word for word in user_input_tokens if word.lower() not in stopwords.words('english')]  # Remove stopwords
    return user_input_tokens


def generate_bot_response(user_input_tokens):
    bot_response = ''
    for word in user_input_tokens:
        if word in health_dict:
            bot_response = bot_response + ' ' + random.choice(health_dict[word])
    if not bot_response:
        bot_response = " I'm sorry, I'm not sure I understand. Can you please elaborate on what you need help with?"
    return bot_response


def handle_main_program():
    print('Bot: ' + greeting())
    while True:
        user_input = input('You: ')
        if user_input != 'bye':
            if user_input.lower() == 'thanks' or user_input.lower() == 'thank you':
                print("Bot: You're welcome!")
                break
            else:
                user_input_tokens = process_user_input(user_input)
                bot_response = generate_bot_response(user_input_tokens)
                print('Bot: ' + bot_response)
        else:
            print('Bot: Goodbye!')
            break


# Define a dictionary of health terms and associated responses
health_dict = {
    'headache': [
        "Have you tried taking an ibuprofen?",
        "Applying a cold or warm compress to your forehead may help relieve the pain.",
        "Make sure you're staying hydrated throughout the day.",
        "Try to relax in a quiet and dark room to reduce discomfort."
    ],
    'fever': [
        "It's important to take your temperature. If it is high, you should see a doctor right away.",
        "Drink plenty of fluids to stay hydrated.",
        "Take over-the-counter fever-reducing medication like acetaminophen or ibuprofen, following the recommended dosage.",
        "Rest and avoid strenuous activities to allow your body to recover."
    ],
    'cold': [
        "You should drink plenty of fluids and get some rest.",
        "You can take over-the-counter cold medicine to help relieve symptoms.",
        "Using saline nasal drops or sprays may help alleviate congestion.",
        "Gargling with warm salt water can provide temporary relief for a sore throat."
    ],
    'allergy': [
        "You should try taking an antihistamine to reduce your allergy symptoms.",
        "Avoid exposure to known allergens or triggers.",
        "Consider using a nasal rinse or saline spray to clear nasal passages.",
        "Wear a mask or keep windows closed to limit exposure to pollen or dust."
    ],
    'diarrhea': [
        "You should drink plenty of fluids to prevent dehydration.",
        "Avoid spicy, fatty, or greasy foods until your symptoms improve.",
        "Over-the-counter medication like loperamide may help control diarrhea, but consult a healthcare professional before use.",
        "If symptoms persist or worsen, it's recommended to see a doctor for further evaluation and treatment."
    ],
    'sprained ankle': [
        "Remember the RICE protocol: Rest, Ice, Compression, and Elevation.",
        "Avoid putting weight on the affected ankle.",
        "Apply an ice pack wrapped in a cloth to the area for 15-20 minutes every few hours.",
        "Use a compression bandage to reduce swelling, but ensure it's not too tight to restrict blood flow.",
        "Elevate your leg by propping it up on a pillow or cushion.",
        "If pain and swelling persist, consult a healthcare professional."
    ],
    'sunburn': [
        "Take a cool bath or shower to soothe the skin.",
        "Apply aloe vera gel or a moisturizing lotion to the affected area.",
        "Avoid further sun exposure and wear loose-fitting, breathable clothing.",
        "Drink plenty of water to stay hydrated.",
        "If the sunburn is severe, with blistering or intense pain, seek medical attention."
    ],
    'insect bite': [
        "Clean the affected area with soap and water.",
        "Apply a cold compress or an ice pack wrapped in a cloth to reduce swelling and relieve itching.",
        "Avoid scratching the bite to prevent infection.",
        "Apply an over-the-counter hydrocortisone cream or take an antihistamine to alleviate itching.",
        "If the bite becomes infected or shows signs of an allergic reaction, seek medical attention."
    ]
}

handle_main_program()
