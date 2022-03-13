import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName('define')
	.setDescription('Replies with definition!');

export async function execute(interaction: CommandInteraction) {
  await interaction.reply();
}
