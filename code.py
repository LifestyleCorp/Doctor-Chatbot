import nltk
import random
nltk.download('punkt')
nltk.download('stopwords')

# Natural language processing libraries
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# Set up the chatbot
# Set up a greeting message
def greeting():
    bot_greeting_msgs = [
        "Hi! I'm a doctor chatbot. I can answer all your health-related questions. How can I help you?",
        "Hi there! I'm a doctor chatbot. I'm here to help you with any health-related questions. What can I do for you?",
        "Hi there! I'm a doctor chatbot, and I'm here to help you with any health-related questions. What do you need help with?"
    ]

    # randomly select a greeting message
    return random.choice(bot_greeting_msgs)


# Construct a response
def construct_response(user_input):
    user_input = user_input.lower()  # normalize the user input
    # tokenize the user input
    user_input_tokens = word_tokenize(user_input)
    user_input_tokens = [word for word in user_input_tokens if word not in stopwords.words('english')]
    # create a response
    bot_response = ''
    for word in user_input_tokens:
        if word in health_dict:
            bot_response = bot_response + ' ' + health_dict[word]
    # if the bot doesn't understand, it will ask for clarification
    if not bot_response:
        bot_response = bot_response + " I'm sorry, I'm not sure I understand. Can you please elaborate on what you need help with?"
    return bot_response


# Define a dictionary of health terms and associated responses
health_dict = {
    'headache': "Have you tried taking an ibuprofen?",
    'fever': "It's important to take your temperature. If it is high, you should see a doctor right away.",
    'cold': "You should drink plenty of fluids and get some rest. You can also take an over-the-counter cold medicine to help you feel better.",
    'allergy': "You should try taking an antihistamine to reduce your allergy symptoms.",
    'diarrhea': "You should drink plenty of fluids, and if symptoms persist, you should see a doctor for further treatment."
}

# The main program
print('Bot: ' + greeting())

while True:
    user_input = input('You: ')
    if user_input != 'bye':
        if user_input == 'thanks' or user_input == 'thank you':
            print("Bot: You're welcome!")
            break
        else:
            bot_response = construct_response(user_input)
            print('Bot: ' + bot_response)
    else:
        print('Bot: Goodbye!')
        break
