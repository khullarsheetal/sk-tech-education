
export interface Course {
  id: string;
  title: string;
  grades: string;
  description: string;
  category: 'Robotics' | 'High School' | 'Empowerment';
  features: string[];
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
