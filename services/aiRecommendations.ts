import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const aiRecommendationsService = {
  async getSecurityRecommendations(
    threatData: any,
    context: string
  ): Promise<string> {
    try {
      const prompt = `
        As a cybersecurity expert, analyze the following threat intelligence data and provide specific security recommendations:
        
        Threat Data:
        ${JSON.stringify(threatData, null, 2)}
        
        Context:
        ${context}
      `;

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a cybersecurity expert providing detailed security recommendations."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      return completion.choices[0].message.content || "No recommendations available.";
    } catch (error) {
      console.error('Error getting security recommendations:', error);
      throw error;
    }
  },

  async analyzeThreatPattern(
    historicalData: any[]
  ): Promise<string> {
    try {
      const prompt = `
        Analyze the following historical threat data and identify patterns or trends:
        ${JSON.stringify(historicalData, null, 2)}
      `;

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a cybersecurity expert analyzing threat patterns."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      return completion.choices[0].message.content || "No pattern analysis available.";
    } catch (error) {
      console.error('Error analyzing threat pattern:', error);
      throw error;
    }
  }
};
