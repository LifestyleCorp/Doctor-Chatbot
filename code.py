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
    'headache': ["Have you tried taking an ibuprofen?"],
    'fever': ["It's important to take your temperature. If it is high, you should see a doctor right away."],
    'cold': ["You should drink plenty of fluids and get some rest. You can also take an over-the-counter cold medicine to help you feel better."],
    'allergy': ["You should try taking an antihistamine to reduce your allergy symptoms."],
    'diarrhea': ["You should drink plenty of fluids, and if symptoms persist, you should see a doctor for further treatment."]
}

handle_main_program()
