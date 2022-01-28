/* eslint-disable max-lines*/
import { Theme } from '@app/components/selectors/theme-selector/themes';

export interface Word {
    en: string;
    fr: string;
    de: string;
    themes: Theme[];
}

export const words: Word[] = [
    { en: 'White', fr: 'Blanc', de: 'Weiß', themes: [Theme.Colors] },
    { en: 'Yellow', fr: 'Jaune', de: 'Gelb', themes: [Theme.Colors] },
    { en: 'Blue', fr: 'Bleu', de: 'Blau', themes: [Theme.Colors] },
    { en: 'Red', fr: 'Rouge', de: 'Rot', themes: [Theme.Colors] },
    { en: 'Green', fr: 'Vert', de: 'Grün', themes: [Theme.Colors] },
    { en: 'Black', fr: 'Noir', de: 'Schwarz', themes: [Theme.Colors] },
    { en: 'Brown', fr: 'Marron', de: 'Braun', themes: [Theme.Colors] },
    { en: 'Silver', fr: 'Argent', de: 'Silber', themes: [Theme.Colors] },
    { en: 'Purple', fr: 'Mauve', de: 'Lila', themes: [Theme.Colors] },
    { en: 'Gray', fr: 'Gris', de: 'Grau', themes: [Theme.Colors] },
    { en: 'Orange', fr: 'Orange', de: 'Orange', themes: [Theme.Colors] },
    { en: 'Arm', fr: 'Bras', de: 'Arm', themes: [Theme.Body] },
    { en: 'Hair', fr: 'Cheveu', de: 'Haar', themes: [Theme.Body] },
    { en: 'Eyelash', fr: 'Cil', de: 'Wimper', themes: [Theme.Body] },
    { en: 'Heart', fr: 'Cœur', de: 'Herz', themes: [Theme.Body] },
    { en: 'Finger', fr: 'Doigt', de: 'Finger', themes: [Theme.Body] },
    { en: 'Back', fr: 'Dos', de: 'Zurück', themes: [Theme.Body] },
    { en: 'Forehead', fr: 'Front', de: 'Stirn', themes: [Theme.Body] },
    { en: 'Knee', fr: 'Genou', de: 'Knie', themes: [Theme.Body] },
    { en: 'Nose', fr: 'Nez', de: 'Nase', themes: [Theme.Body] },
    { en: 'Nail', fr: 'Ongle', de: 'Nagel', themes: [Theme.Body] },
    { en: 'Foot', fr: 'Pied', de: 'Fuß', themes: [Theme.Body] },
    { en: 'Wrist', fr: 'Poignet', de: 'Handgelenk', themes: [Theme.Body] },
    { en: 'Blood', fr: 'Sang', de: 'Blut', themes: [Theme.Body] },
    { en: 'Eyebrow', fr: 'Sourcil', de: 'Augenbraue', themes: [Theme.Body] },
    { en: 'Face', fr: 'Visage', de: 'Gesicht', themes: [Theme.Body] },
    { en: 'Eye', fr: 'Oeil', de: 'Auge', themes: [Theme.Body] },
    { en: 'Beard', fr: 'Barbe', de: 'Bart', themes: [Theme.Body] },
    { en: 'Mouth', fr: 'Bouche', de: 'Mund', themes: [Theme.Body] },
    { en: 'Ankle', fr: 'Cheville', de: 'Knöchel', themes: [Theme.Body] },
    { en: 'Tooth', fr: 'Dent', de: 'Zahn', themes: [Theme.Body] },
    { en: 'Shoulder', fr: 'Épaule', de: 'Schulter', themes: [Theme.Body] },
    { en: 'Buttocks', fr: 'Fesses', de: 'Gesäß', themes: [Theme.Body] },
    { en: 'Throat', fr: 'Gorge', de: 'Kehle', themes: [Theme.Body] },
    { en: 'Leg', fr: 'Jambe', de: 'Bein', themes: [Theme.Body] },
    { en: 'Cheek', fr: 'Joue', de: 'Wange', themes: [Theme.Body] },
    { en: 'Tongue', fr: 'Langue', de: 'Zunge', themes: [Theme.Body] },
    { en: 'Lip', fr: 'Lèvre', de: 'Lippe', themes: [Theme.Body] },
    { en: 'Hand', fr: 'Main', de: 'Hand', themes: [Theme.Body] },
    { en: 'Moustache', fr: 'Moustache', de: 'Schnurrbart', themes: [Theme.Body] },
    { en: 'Ear', fr: 'Oreille', de: 'Ohr', themes: [Theme.Body] },
    { en: 'Skin', fr: 'Peau', de: 'Haut', themes: [Theme.Body] },
    { en: 'Chest', fr: 'Poitrine', de: 'Brust', themes: [Theme.Body] },
    { en: 'Head', fr: 'Tête', de: 'Kopf', themes: [Theme.Body] },
    { en: 'Cousin', fr: 'Cousin ', de: 'Vetter', themes: [Theme.Family] },
    { en: 'Son', fr: 'Fils ', de: 'Sohn', themes: [Theme.Family] },
    { en: 'Brother', fr: 'Frère ', de: 'Bruder', themes: [Theme.Family] },
    { en: 'Son-In-Law', fr: 'Gendre', de: 'Schwiegersohn', themes: [Theme.Family] },
    { en: 'Grandfather', fr: 'Grand-Père ', de: 'Großvater', themes: [Theme.Family] },
    { en: 'Nephew', fr: 'Neveu ', de: 'Neffe', themes: [Theme.Family] },
    { en: 'Uncle', fr: 'Oncle ', de: 'Onkel', themes: [Theme.Family] },
    { en: 'Dad', fr: 'Père', de: 'Vater', themes: [Theme.Family] },
    { en: 'Grandson', fr: 'Petit-Fils ', de: 'Enkel', themes: [Theme.Family] },
    { en: 'Cousin', fr: 'Cousine', de: 'Vetter', themes: [Theme.Family] },
    { en: 'Spouse', fr: 'Épouse', de: 'Ehepartner', themes: [Theme.Family] },
    { en: 'Daughter', fr: 'Fille ', de: 'Mädchen', themes: [Theme.Family] },
    { en: 'Sister', fr: 'Soeur', de: 'Schwester', themes: [Theme.Family] },
    { en: 'Bru', fr: 'Bru', de: 'Bru', themes: [Theme.Family] },
    { en: 'Grandmother', fr: 'Grand-Mère ', de: 'Oma', themes: [Theme.Family] },
    { en: 'Niece', fr: 'Nièce', de: 'Nichte', themes: [Theme.Family] },
    { en: 'Aunt', fr: 'Tante', de: 'Tante', themes: [Theme.Family] },
    { en: 'Mother', fr: 'Mère', de: 'Mutter', themes: [Theme.Family] },
    { en: 'Granddaughter', fr: 'Petite-Fille ', de: 'Enkelin', themes: [Theme.Family] },
    { en: 'Husband', fr: 'Époux', de: 'Ehemann', themes: [Theme.Family] },
    { en: 'Child', fr: 'Enfant', de: 'Kind', themes: [Theme.Family] },
    { en: 'Balcony', fr: 'Balcon', de: 'Balkon', themes: [Theme.House] },
    { en: 'Office', fr: 'Bureau', de: 'Sekretariat', themes: [Theme.House] },
    { en: 'Corridor', fr: 'Couloir', de: 'Gang', themes: [Theme.House] },
    { en: 'Stairs', fr: 'Escalier', de: 'Treppe', themes: [Theme.House] },
    { en: 'Sink', fr: 'Évier', de: 'Waschbecken', themes: [Theme.House] },
    { en: 'Oven', fr: 'Four', de: 'Ofen', themes: [Theme.House] },
    { en: 'Microwave', fr: 'Micro-Ondes', de: 'Mikrowelle', themes: [Theme.House] },
    { en: 'Garden', fr: 'Jardin', de: 'Garten', themes: [Theme.House] },
    { en: 'Dishwasher', fr: 'Lave-Vaisselle', de: 'Geschirrspüler', themes: [Theme.House] },
    { en: 'Bed', fr: 'Lit', de: 'Bett', themes: [Theme.House] },
    { en: 'Mirror', fr: 'Miroir', de: 'Spiegel', themes: [Theme.House] },
    { en: 'Ceiling', fr: 'Plafond', de: 'Decke', themes: [Theme.House] },
    { en: 'Fridge', fr: 'Réfrigérateur', de: 'Kühlschrank', themes: [Theme.House] },
    { en: 'Basement', fr: 'Sous-Sol', de: 'Untergeschoss', themes: [Theme.House] },
    { en: 'Cabinet', fr: 'Armoire', de: 'Kabinett', themes: [Theme.House] },
    { en: 'Bathtub', fr: 'Baignoire', de: 'Badewanne', themes: [Theme.House] },
    { en: 'Chair', fr: 'Chaise', de: 'Sessel', themes: [Theme.House] },
    { en: 'Bedroom', fr: 'Chambre', de: 'Schlafzimmer', themes: [Theme.House] },
    { en: 'Court', fr: 'Cour', de: 'Gericht', themes: [Theme.House] },
    { en: 'Food', fr: 'Cuisine', de: 'Lebensmittel', themes: [Theme.House] },
    { en: 'Window', fr: 'Fenêtre', de: 'Fenster', themes: [Theme.House] },
    { en: 'Washer', fr: 'Laveuse', de: 'Unterlegscheibe', themes: [Theme.House] },
    { en: 'Gate', fr: 'Porte', de: 'Tor', themes: [Theme.House] },
    { en: 'Bathroom', fr: 'Salle De Bain', de: 'Bad', themes: [Theme.House] },
    { en: 'Table', fr: 'Table', de: 'Tabelle', themes: [Theme.House] },
    { en: 'Terrace', fr: 'Terrasse', de: 'Terrasse', themes: [Theme.House] },
    { en: 'Be', fr: 'Être', de: 'Sein', themes: [Theme.Verbs] },
    { en: 'Have', fr: 'Avoir', de: 'Haben', themes: [Theme.Verbs] },
    { en: 'Do', fr: 'Faire', de: 'Machen', themes: [Theme.Verbs] },
    { en: 'Say', fr: 'Dire', de: 'Sagen', themes: [Theme.Verbs] },
    { en: 'See', fr: 'Voir', de: 'Sehen', themes: [Theme.Verbs] },
    { en: 'Take', fr: 'Prendre', de: 'Nehmen', themes: [Theme.Verbs] },
    { en: 'Can', fr: 'Pouvoir', de: 'Kann', themes: [Theme.Verbs] },
    { en: 'Speak', fr: 'Parler', de: 'Sprechen', themes: [Theme.Verbs] },
    { en: 'Know', fr: 'Savoir', de: 'Wissen', themes: [Theme.Verbs] },
    { en: 'Give', fr: 'Donner', de: 'Geben', themes: [Theme.Verbs] },
    { en: 'Pass', fr: 'Passer', de: 'Bestehen', themes: [Theme.Verbs] },
    { en: 'Put', fr: 'Mettre', de: 'Stellen', themes: [Theme.Verbs] },
    { en: 'Leave', fr: 'Partir', de: 'Verlassen', themes: [Theme.Verbs] },
    { en: 'Find', fr: 'Trouver', de: 'Finden', themes: [Theme.Verbs] },
    { en: 'Laugh', fr: 'Rire', de: 'Lachen', themes: [Theme.Verbs] },
    { en: 'Live', fr: 'Vivre', de: 'Leben', themes: [Theme.Verbs] },
    { en: 'Let', fr: 'Laisser', de: 'Lassen', themes: [Theme.Verbs] },
    { en: 'Return', fr: 'Retourner', de: 'Rückkehr', themes: [Theme.Verbs] },
    { en: 'Smile', fr: 'Sourire', de: 'Lächeln', themes: [Theme.Verbs] },
    { en: 'Come', fr: 'Venir', de: 'Kommen', themes: [Theme.Verbs] },
    { en: 'Understand', fr: 'Comprendre', de: 'Verstehen', themes: [Theme.Verbs] },
    { en: 'Think', fr: 'Penser', de: 'Überlegen', themes: [Theme.Verbs] },
    { en: 'Believe', fr: 'Croire', de: 'Glauben', themes: [Theme.Verbs] },
    { en: 'Hear', fr: 'Entendre', de: 'Hören', themes: [Theme.Verbs] },
    { en: 'Hold', fr: 'Tenir', de: 'Halt', themes: [Theme.Verbs] },
    { en: 'Ask', fr: 'Demander', de: 'Fragen', themes: [Theme.Verbs] },
    { en: 'Memory', fr: 'Souvenir', de: 'Erinnerung', themes: [Theme.Verbs] },
    { en: 'Go', fr: 'Aller', de: 'Gehen', themes: [Theme.Verbs] },
    { en: 'Play', fr: 'Jouer', de: 'Spielen', themes: [Theme.Verbs] },
    { en: 'Write', fr: 'Écrire', de: 'Schreiben', themes: [Theme.Verbs] },
    { en: 'Know', fr: 'Connaître', de: 'Wissen', themes: [Theme.Verbs] },
    { en: 'Become', fr: 'Devenir', de: 'Werden', themes: [Theme.Verbs] },
    { en: 'Die', fr: 'Mourir', de: 'Versterben', themes: [Theme.Verbs] },
    { en: 'Stay', fr: 'Rester', de: 'Bleiben', themes: [Theme.Verbs] },
    { en: 'Enter', fr: 'Entrer', de: 'Eintreten', themes: [Theme.Verbs] },
    { en: 'Eat', fr: 'Manger', de: 'Essen', themes: [Theme.Verbs] },
    { en: 'Fall', fr: 'Tomber', de: 'Fallen', themes: [Theme.Verbs] },
    { en: 'Shoot', fr: 'Tirer', de: 'Schießen', themes: [Theme.Verbs] },
    { en: 'Read', fr: 'Lire', de: 'Lesen', themes: [Theme.Verbs] },
    { en: 'Follow', fr: 'Suivre', de: 'Folgen', themes: [Theme.Verbs] },
    { en: 'Get', fr: 'Obtenir', de: 'Werden', themes: [Theme.Verbs] },
    { en: 'Lose', fr: 'Perdre', de: 'Verlieren', themes: [Theme.Verbs] },
    { en: 'Explain', fr: 'Expliquer', de: 'Erklären', themes: [Theme.Verbs] },
    { en: 'Assure', fr: 'Assurer', de: 'Versichern', themes: [Theme.Verbs] },
    { en: 'Serve', fr: 'Servir', de: 'Dienen', themes: [Theme.Verbs] },
    { en: 'Carry', fr: 'Porter', de: 'Tragen', themes: [Theme.Verbs] },
    { en: 'Show', fr: 'Montrer', de: 'Zeigen', themes: [Theme.Verbs] },
    { en: 'Foreigner', fr: 'Étranger', de: 'Ausländer', themes: [Theme.Verbs] },
    { en: 'Avoid', fr: 'Éviter', de: 'Vermeiden', themes: [Theme.Verbs] },
    { en: 'Arrive', fr: 'Arriver', de: 'Ankommen', themes: [Theme.Verbs] },
    { en: 'Want', fr: 'Vouloir', de: 'Wollen', themes: [Theme.Verbs] },
    { en: 'Acknowledge', fr: 'Reconnaître', de: 'Anerkennen', themes: [Theme.Verbs] },
    { en: 'Ascend', fr: 'Monter', de: 'Aufsteigen', themes: [Theme.Verbs] },
    { en: 'Drink', fr: 'Boire', de: 'Getränk', themes: [Theme.Verbs] },
    { en: 'Forget', fr: 'Oublier', de: 'Vergessen', themes: [Theme.Verbs] },
    { en: 'Pose', fr: 'Poser', de: 'Posieren', themes: [Theme.Verbs] },
    { en: 'Like', fr: 'Aimer', de: 'Mögen', themes: [Theme.Verbs] },
    { en: 'Stop', fr: 'Arrêter', de: 'Halt', themes: [Theme.Verbs] },
    { en: 'Feel', fr: 'Sentir', de: 'Fühlen', themes: [Theme.Verbs] },
    { en: 'Reach', fr: 'Atteindre', de: 'Erreichen', themes: [Theme.Verbs] },
    { en: 'Change', fr: 'Changer', de: 'Wechseln', themes: [Theme.Verbs] },
    { en: 'Sleep', fr: 'Dormir', de: 'Schlafen', themes: [Theme.Verbs] },
];