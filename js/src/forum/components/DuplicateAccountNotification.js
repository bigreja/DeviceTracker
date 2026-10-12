import app from 'flarum/forum/app';
import Notification from 'flarum/forum/components/Notification';

export default class DuplicateAccountNotification extends Notification {
  icon() {
    return 'fas fa-shield-alt';
  }

  href() {
    const actor = this.attrs.notification.fromUser();
    return actor ? app.route('user', { username: actor.username() }) : '#';
  }

  content() {
    const notification = this.attrs.notification;
    const data = notification.content() || {};
    const actor = notification.fromUser();
    const actorName = actor ? actor.username() : (data.actor_username || 'User');
    const linked = Array.isArray(data.linked_usernames) ? data.linked_usernames.join(', ') : '';

    return 'Device Tracker: ' + actorName + ' shares a device with ' + (linked || 'another account');
  }
}

